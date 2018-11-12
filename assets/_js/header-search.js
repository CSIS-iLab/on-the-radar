const HeaderSearch = () => {
  const trigger = document.querySelector('.js-search-trigger')
  const closeTrigger = document.querySelector('.js-search-trigger-close')
  const form = document.querySelector('.site-header__search-form')
  const input = document.getElementById('header-search')

  trigger.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
      e.preventDefault()
      openSearch()
    }
  })

  trigger.addEventListener('click', function() {
    if (form.classList.contains('is-active')) {
      closeSearch()
    } else {
      openSearch()
    }
  })

  closeTrigger.addEventListener('click', function() {
    closeSearch()
  })

  function openSearch() {
    form.classList.add('is-active')
    trigger.setAttribute('aria-expanded', 'true')
    trigger.classList.add('is-active')
    input.focus()
  }

  function closeSearch() {
    trigger.setAttribute('aria-expanded', 'false')
    trigger.classList.remove('is-active')
    form.classList.remove('is-active')
  }
}

export default HeaderSearch
