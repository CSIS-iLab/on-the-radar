const Navigation = () => {
  const trigger = document.querySelector('.site-header__nav-trigger')
  const menu = document.querySelector('.site-header__nav-menu')

  trigger.addEventListener('click', function() {
    if (menu.classList.contains('is-active')) {
      this.setAttribute('aria-expanded', 'false')
      this.classList.remove('is-active')
      menu.classList.remove('is-active')
    } else {
      menu.classList.add('is-active')
      this.setAttribute('aria-expanded', 'true')
      this.classList.add('is-active')
    }
  })
}

export default Navigation
