const Definitions = () => {
  const els = document.querySelectorAll('.js-fade-in')

  if (
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
  ) {
    els.forEach(el => el.classList.add('js-is-visible'))
  } else {
    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('js-is-visible')
          observer.unobserve(entry.target)
        }
      })
    })

    els.forEach(el => {
      observer.observe(el)
    })
  }
}

export default Definitions
