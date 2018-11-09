import algoliasearch from 'algoliasearch'
import instantsearch from 'instantsearch.js/es'
import {
  searchBox,
  hits,
  stats,
  pagination,
  refinementList,
  clearAll
} from 'instantsearch.js/es/widgets'

const mapStatetoKeys = (uiState, urlKeyDivs, dataset) => {
  let keyArray = urlKeyDivs
    .map(f => f.replace('filter__details-', '').replace('filter__content-', ''))
    .map(f => {
      let param
      if (dataset.collection === 'Resources') {
        param = f === 'type' ? 'type' : f === 'topic' ? 'topics' : f
      } else {
        param = f === 'type' ? 'collection' : f === 'topic' ? 'keywords' : f
      }

      if (uiState.refinementList) {
        let queries = uiState.refinementList[param]
        if (queries) return { [param]: queries.join('~') }
      }
    })
    .filter(k => k)

  let keys = {}
  keyArray.forEach(k => {
    let key = Object.keys(k)[0]
    keys[key] = k[key]
  })
  return keys
}

const AlgoliaSearch = function() {
  const dataset = document.querySelector('.archive').dataset

  const elementsToHideNoResults = document.querySelectorAll(
    '.pagination--hide-no-results'
  )
  const client = algoliasearch('7UNKAH6RMH', 'b9011cf7f49e60630161fcacf0e37d02')

  let facetDivs = document.querySelectorAll("[id^='filter__details-']")
  let typeDivs = document.querySelectorAll("[id^='filter__content-']")

  let urlKeyDivs = [...facetDivs, ...typeDivs].map(d => d.id)

  const routing = {
    stateMapping: {
      stateToRoute(uiState) {
        let state = {
          query: uiState.query,
          page: uiState.page
        }

        let keys = mapStatetoKeys(uiState, urlKeyDivs, dataset)

        return Object.assign(keys, state)
      },
      routeToState(routeState) {
        return {
          query: routeState.query,
          refinementList: {
            keywords: routeState.keywords && routeState.keywords.split('~')
          },
          page: routeState.page
        }
      }
    }
  }

  const searchParameters = {
    hitsPerPage: 3
  }

  searchParameters.filters = dataset.collection
    ? `collection:'${dataset.collection}'`
    : `NOT collection:Resources`

  const search = instantsearch({
    indexName: 'on_the_radar_posts',
    searchClient: client,
    searchParameters,
    routing
  })

  ////////// RESULTS
  search.addWidget(
    hits({
      container: '#hits',
      templates: {
        item: hit => {
          return `${hit.post_html}`
        },
        empty: `<h2 class="section-title">Nothing Found</h2>
          <p>Sorry, but nothing matched your search terms. Please try again with different keywords.</p>
          <a href="" class="btn">Clear All Filters</a>`
      }
    })
  )
  if (
    !dataset.collection ||
    dataset.collection === 'Resources' ||
    dataset.collection === 'Analysis'
  ) {
    //////////  TOPIC/TYPE REFINEMENT (Search)
    search.addWidget(
      refinementList({
        container: '#filter__content-type',
        attributeName:
          dataset.collection === 'Resources' ? 'type' : 'collection',
        operator: 'or',
        sortBy: ['name:asc'],
        collapsible: {
          collapsed: true
        },
        templates: {
          header: 'Type<i class="icon-angle-sm-right"></i>',
          item: `{{ label }} ({{ count }})`
        }
      })
    )

    search.addWidget(
      refinementList({
        container: '#filter__content-topic',
        attributeName:
          dataset.collection === 'Resources' ? 'topics' : 'keywords',
        operator: 'or',
        sortBy: ['name:asc'],
        collapsible: {
          collapsed: true
        },
        templates: {
          header: 'Topic<i class="icon-angle-sm-right"></i>',
          item: '{{ label }} ({{ count }})'
        }
      })
    )
    if (!dataset.collection) {
      ////////// SEARCH
      search.addWidget(
        searchBox({
          container: '#search-input',
          queryHook: function(query, search) {
            search(query)
          },
          magnifier: false
        })
      )
    } else if (dataset.collection === 'Resources') {
      ////////// RESOURCES Search
      search.addWidget(
        searchBox({
          container: '#filter__name',
          queryHook: function(query, search) {
            search(query)
          },
          magnifier: false
        })
      )
    }
  }

  if (
    dataset.collection === 'Issue Briefs' ||
    dataset.collection === 'Workshops'
  ) {
    if (dataset.collection === 'Issue Briefs') {
      ////////// ISSUE BRIEF TYPE
      search.addWidget(
        refinementList({
          container: '#filter__content-brief',
          attributeName: 'brief_type',
          operator: 'or',
          templates: {
            item: '{{ label }} ({{ count }})'
          },
          autoHideContainer: false,
          sortBy: ['name:desc']
        })
      )

      ////////// CLEAR BRIEF TYPE
      search.addWidget(
        clearAll({
          container: '#filter__content-brief-clear',
          templates: {
            link: () => {
              let results_text = 'Results'
              return `All ${results_text}`
            }
          },

          autoHideContainer: false,
          clearsQuery: false
        })
      )

      search.addWidget(
        stats({
          container: '.all-result-count-placeholder',
          templates: {
            body: data => {
              return ` (${data.nbHits})`
            }
          }
        })
      )
    }

    let facetFilters = [...facetDivs].map(d => d.id)
    facetFilters.forEach(f => {
      let facet = f.replace('filter__details-', '')
      search.addWidget(
        refinementList({
          container: `#${f}`,
          attributeName: `details.${facet}`,
          operator: 'or',
          collapsible: {
            collapsed: true
          },
          transformData: {
            item: data => {
              data.customLabel = toTitleCase(data.label)
              return data
            }
          },
          templates: {
            header: `${facet.replace(
              /_/g,
              ' '
            )}<i class="icon-angle-sm-right"></i>`,
            item: '{{ label }} ({{ count }})'
          }
        })
      )
    })
  }

  ////////// RESULTS SUMMARY
  search.addWidget(
    stats({
      container: '#results__summary',
      templates: {
        body: data => {
          let results_text = 'Items'
          if (data.hasOneResult) {
            results_text = 'Item'
          }
          let page = data.page + 1
          return `
            <span class="pages">Page ${page} of ${data.nbPages}</span>
            <span class="items">${data.nbHits} ${results_text}</span>
          `
        },
        autoHideContainer: false
      }
    })
  )

  ////////// RESULTS SORT
  search.addWidget({
    init: function({ helper }) {
      document
        .querySelector('#results__sort .sort-oldest')
        .addEventListener('click', function() {
          helper.setIndex('on_the_radar_asc').search()
          this.classList.add('selected')
          document.querySelector('.sort-newest').classList.remove('selected')
        })
    }
  })

  search.addWidget({
    init: function({ helper }) {
      document
        .querySelector('#results__sort .sort-newest')
        .addEventListener('click', function() {
          helper.setIndex('on_the_radar_desc').search()
          this.classList.add('selected')
          document.querySelector('.sort-oldest').classList.remove('selected')
        })
    }
  })

  ////////// PAGINATION
  search.addWidget(
    pagination({
      container: '#pagination',
      showFirstLast: false,
      labels: {
        previous:
          '<button aria-label="previous"><i class="icon-angle-lg-left"></i></button>',
        next:
          '<button aria-label="next"><i class="icon-angle-lg-right"></i></button>'
      }
    })
  )

  ////////// CLEAR DETAILS REFINEMENT
  search.addWidget(
    clearAll({
      container: '#filter__clear-all',
      templates: {
        link: 'Clear All'
      },
      autoHideContainer: false,
      clearsQuery: false
    })
  )

  search.on('render', () => {
    let title = search.searchParameters.query

    if (
      !title &&
      search.searchParameters.hasOwnProperty('disjunctiveFacetsRefinements')
    ) {
      let facets = Object.keys(
        search.searchParameters.disjunctiveFacetsRefinements
      )

      facets.forEach(
        facet =>
          (title =
            search.searchParameters.disjunctiveFacetsRefinements[facet][0])
      )
    }

    if (!title) {
      return
    }

    if (search.helper.lastResults.nbHits == 0) {
      toggleElementsOnNoResults(elementsToHideNoResults, 'add')
    } else {
      toggleElementsOnNoResults(elementsToHideNoResults, 'remove')
    }

    if (search.helper.lastResults.nbHits < 2) {
      toggleElementsOnNoResults(
        document.querySelectorAll('#results__sort'),
        'add'
      )
    }
  })

  search.start()
}

function toggleElementsOnNoResults(elements, action) {
  elements.forEach(el => el.classList[action]('pagination--is-hidden'))
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  })
}

export default AlgoliaSearch
