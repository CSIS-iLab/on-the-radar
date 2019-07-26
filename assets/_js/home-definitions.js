const Definitions = () => {
  const els = document.querySelectorAll('.js-fade-in')

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

export default Definitions
