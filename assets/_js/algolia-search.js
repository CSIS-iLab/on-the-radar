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

let pageTotal

const dataset = document.querySelector('.archive').dataset

const elementsToHideNoResults = document.querySelectorAll(
  '.algolia--hide-no-results'
)
const client = algoliasearch('7UNKAH6RMH', 'b9011cf7f49e60630161fcacf0e37d02')

const indexName = 'on_the_radar'
const searchParameters = {
  hitsPerPage: 3
}

searchParameters.filters = dataset.collectionLabel
  ? `collection_label:'${dataset.collectionLabel}'`
  : `NOT collection_label:Resources`

const routing = {
  stateMapping: {
    stateToRoute(uiState) {
      let state = {
        query: uiState.query,
        page: uiState.page
      }

      let keys = mapStateToKeys(uiState, urlKeyDivs, dataset)
      let route = Object.assign(keys, state)
      return route
    },
    routeToState(routeState) {
      let route = {
        state: routeState.query,
        page: routeState.page
      }
      let refinementList = mapRouteToKeys(routeState)
      let state = Object.assign(refinementList, route)
      return state
    }
  }
}

const search = instantsearch({
  indexName: indexName,
  searchClient: client,
  searchParameters,
  routing
})

let facetDivs = document.querySelectorAll("[id^='filter__details-']")
let typeDivs = document.querySelectorAll("[id^='filter__content-']")

let urlKeyDivs = [...facetDivs, ...typeDivs].map(d => d.id)

const AlgoliaSearch = () => {
  addResults()

  if (dataset.filter_entries) {
    addTopicTypeRelatedBriefFilter()

    if (!dataset.collectionLabel) {
      addSiteSearchBox()
    } else if (dataset.collectionLabel === 'resources') {
      addResourcesSearchBox()
    }
  }

  if (dataset.refine_results) {
    if (dataset.collectionLabel === 'briefs') {
      addBriefTypeRefinement()
    }
    addDetailsRefinement()
  }

  if (dataset.collectionLabel !== 'resources') {
    addPageCountSummary()
    addSortWidget()
    addPagination()
  }

  addItemCountSummary()
  addResetWidget()

  search.on('init', () => {
    pageTotal = search.helper.lastResults.nbHits
  })

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

const toggleElementsOnNoResults = (elements, action) => {
  elements.forEach(el => el.classList[action]('algolia--is-hidden'))
}

const mapRouteToKeys = routeState => {
  let refinementList = {}
  Object.keys(routeState).forEach(k => {
    refinementList[k] = routeState[k].split('~')
  })
  return { refinementList }
}

const mapStateToKeys = (uiState, urlKeyDivs, dataset) => {
  let keyArray = urlKeyDivs
    .map(f => f.replace('filter__details-', '').replace('filter__content-', ''))
    .map(f => {
      let param
      if (dataset.collectionLabel === 'resources') {
        param = f === 'type' ? 'type' : f === 'topic' ? 'topics' : f
      } else if (dataset.collectionLabel === 'posts') {
        param =
          f === 'type'
            ? 'categories'
            : f === 'topic'
              ? 'keywords'
              : f === 'related'
                ? 'related_briefs'
                : f
      } else if (dataset.refine_results) {
        param = f === 'brief' ? 'brief_type' : `details.${f}`
      } else if (!dataset.collectionLabel) {
        param =
          f === 'type' ? 'collection_title' : f === 'topic' ? 'keywords' : f
      } else {
        param = f
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
const addResults = () => {
  search.addWidget(
    hits({
      container: '#hits',
      templates: {
        item: hit => {
          return `${hit.post_html}`
        },
        empty: `<h2 class="section-title">Nothing Found</h2>
          <p>Sorry, but nothing matched your search terms. Please try again with different keywords.</p>
          <a href="." class="btn">Clear All Filters</a>`
      }
    })
  )
}

const addTopicTypeRelatedBriefFilter = () => {
  search.addWidget(
    refinementList({
      container: '#filter__content-type',
      attributeName:
        dataset.collectionLabel === 'resources'
          ? 'type'
          : dataset.collectionLabel === 'posts'
            ? 'categories'
            : 'collection_title',
      operator: 'or',
      collapsible: {
        collapsed: true
      },
      sortBy: ['name:asc'],
      autoHideContainer: false,
      templates: {
        header: 'Type<i class="icon-angle-lg-right"></i>',
        item: data => {
          return `${
            data.isRefined
              ? '<i class="icon-checkbox-selected"></i>'
              : '<i class="icon-checkbox-empty"></i>'
          }${data.label} (${data.count})`
        }
      }
    })
  )

  search.addWidget(
    refinementList({
      container: '#filter__content-topic',
      attributeName:
        dataset.collectionLabel === 'resources' ? 'topics' : 'keywords',
      operator: 'or',
      collapsible: {
        collapsed: true
      },
      sortBy: ['name:asc'],
      autoHideContainer: false,
      templates: {
        header: 'Topic<i class="icon-angle-lg-right"></i>',
        item: data => {
          return `${
            data.isRefined
              ? '<i class="icon-checkbox-selected"></i>'
              : '<i class="icon-checkbox-empty"></i>'
          }${data.label} (${data.count})`
        }
      }
    })
  )

  if (dataset.collectionLabel === 'posts') {
    search.addWidget(
      refinementList({
        container: '#filter__content-related',
        attributeName: 'related_briefs',
        operator: 'or',
        collapsible: {
          collapsed: true
        },
        sortBy: ['name:asc'],
        templates: {
          header: 'Related Briefs<i class="icon-angle-lg-right"></i>',
          item: data => {
            return `${
              data.isRefined
                ? '<i class="icon-checkbox-selected"></i>'
                : '<i class="icon-checkbox-empty"></i>'
            }${data.label} (${data.count})`
          }
        }
      })
    )
  }

  let container =
    dataset.collectionLabel === 'briefs'
      ? '.archive__filter-type #filter__count'
      : '.archive__sidebar #filter__count'

  search.addWidget(
    stats({
      container: container,
      templates: {
        body: () => {
          let filters = search.helper.state.disjunctiveFacetsRefinements

          let refinements = Object.keys(filters).filter(
            f => !f.includes('details.')
          )

          let refinementCount = refinements.length

          if (refinementCount) {
            document.querySelector(container).style.paddingBottom = '0.8rem'

            return `${refinementCount} applied`
          } else {
            document.querySelector(container).style.paddingBottom = '1.5rem'

            return null
          }
        },
        autoHideContainer: false
      }
    })
  )
}

const addSiteSearchBox = () => {
  search.addWidget(
    searchBox({
      container: '#search-input',
      queryHook: function(query, search) {
        search(query)
      },
      magnifier: true,
      reset: false
    })
  )
}

const addResourcesSearchBox = () => {
  search.addWidget(
    searchBox({
      container: '#filter__name',
      queryHook: function(query, search) {
        search(query)
      },
      magnifier: true,
      reset: false
    })
  )
}

const addBriefTypeRefinement = () => {
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

  search.addWidget({
    init: function({ helper }) {
      let container = document.querySelector('#filter__content-brief-clear')
      let countWidget = document.querySelector('#filter__content-brief-count')

      for (let i = 0; i < 5; i++) {
        const parent = container.parentNode
        const wrapper = document.createElement('div')
        parent.replaceChild(wrapper, container)
        wrapper.appendChild(container)

        if (i === 0)
          wrapper.setAttribute('id', 'filter__content-brief-clear-container')
      }
      container.classList.add('ais-root', 'ais-refinement-list--item')

      if (!window.location.href.includes('brief_type'))
        container.classList.add('ais-refinement-list--item__active')

      container.appendChild(countWidget)

      container.addEventListener('click', function() {
        let activeItem = document.querySelector(
          '.archive__filter-type .ais-refinement-list--item__active'
        )
        if (activeItem)
          activeItem.classList.remove('ais-refinement-list--item__active')

        this.classList.add('ais-refinement-list--item__active')
        helper.clearRefinements('brief_type').search()
      })
    }
  })

  search.addWidget(
    stats({
      container: '#filter__content-brief-count',
      autoHideContainer: false,
      templates: {
        body: data => {
          pageTotal = pageTotal || data.nbHits
          return `&nbsp;(${pageTotal})`
        }
      }
    })
  )
}

const addDetailsRefinement = () => {
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
        templates: {
          header: `${facet.replace(
            /_/g,
            ' '
          )}<i class="icon-angle-lg-right"></i>`,
          item: data => {
            return `${
              data.isRefined
                ? '<i class="icon-checkbox-selected"></i>'
                : '<i class="icon-checkbox-empty"></i>'
            }${data.label} (${data.count})`
          }
        }
      })
    )
  })

  search.addWidget(
    stats({
      container: '.archive__sidebar #filter__count',
      templates: {
        body: () => {
          let filters = search.helper.state.disjunctiveFacetsRefinements

          let refinements = Object.keys(filters).filter(f =>
            f.includes('details.')
          )

          let refinementCount = refinements.length

          if (refinementCount) {
            document.querySelector(
              '.archive__sidebar #filter__count'
            ).style.paddingBottom = '0.8rem'

            return `${refinementCount} applied`
          } else {
            document.querySelector(
              '.archive__sidebar #filter__count'
            ).style.paddingBottom = '1.5rem'

            return null
          }
        },
        autoHideContainer: false
      }
    })
  )
}

const addItemCountSummary = () => {
  search.addWidget(
    stats({
      container: '#results__summary_count',
      templates: {
        body: data => {
          let results_text = 'Items'
          if (data.hasOneResult) {
            results_text = 'Item'
          }
          return `
            <span class="summary-text">${
              data.nbHits
            }</span> <span class="summary-label">${results_text}</span>
          `
        },
        autoHideContainer: false
      }
    })
  )
}

const addPageCountSummary = () => {
  search.addWidget(
    stats({
      container: '#results__summary_page',
      templates: {
        body: data => {
          let page = data.page + 1
          return `
            <span class="summary-label">Page</span> <span class="summary-text">${page} of ${
            data.nbPages
          }</span> |
          `
        },
        autoHideContainer: false
      }
    })
  )
}

const addSortWidget = () => {
  let searchIndex =
    dataset.collectionLabel === 'workshops'
      ? 'on_the_radar_workshops'
      : 'on_the_radar'

  search.addWidget({
    init: function({ helper }) {
      document
        .querySelector('#results__sort .sort-oldest')
        .addEventListener('click', function() {
          helper.setIndex(`${searchIndex}_asc`).search()
          this.classList.add('selected-sort')
          document
            .querySelector('.sort-newest')
            .classList.remove('selected-sort')
        })
    }
  })

  search.addWidget({
    init: function({ helper }) {
      document
        .querySelector('#results__sort .sort-newest')
        .addEventListener('click', function() {
          helper.setIndex(`${searchIndex}_desc`).search()
          this.classList.add('selected-sort')
          document
            .querySelector('.sort-oldest')
            .classList.remove('selected-sort')
        })
    }
  })
}

const addPagination = () => {
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
}

const addResetWidget = () => {
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
}

export default AlgoliaSearch
