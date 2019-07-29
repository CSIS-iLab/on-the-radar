const TOC = () => {
  const menu = document.getElementById('toc')
  const btnOpen = document.getElementById('toc-open')
  const btnClose = document.getElementById('toc-close')

  btnOpen.addEventListener('click', function() {
    menu.classList.add('js-menu-open')
  })

  btnClose.addEventListener('click', function() {
    menu.classList.remove('js-menu-open')
  })

  const sections = document.querySelectorAll('.js-include-in-toc')
  const links = Array.from(document.querySelectorAll('.toc__menu-item')).reduce(
    (acc, curr) => {
      acc[curr.getAttribute('data-hash')] = curr
      return acc
    },
    {}
  )
  let current

  if (
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
  ) {
    return false
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          if (current) {
            links[current].classList.remove('toc__menu-item--active')
          }
          current = entry.target.id
          links[current].classList.add('toc__menu-item--active')
        } else {
          links[entry.target.id].classList.remove('toc__menu-item--active')
        }
      })
    })

    sections.forEach(section => {
      observer.observe(section)
    })
  }
}

export default TOC
