const HeaderSearch = () => {
  const triggers = document.querySelectorAll('.js-search-trigger')
  const form = document.querySelector('.site-header__search-form')

  triggers.forEach(trigger => {
    console.log(trigger)
    trigger.addEventListener('click', function() {
      if (form.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false')
        this.classList.remove('is-active')
        form.classList.remove('is-active')
      } else {
        form.classList.add('is-active')
        this.setAttribute('aria-expanded', 'true')
        this.classList.add('is-active')
      }
    })
  })
}

export default HeaderSearch
