const Divider = () => {
  const section = document.querySelector('.matter__divider')
  const brackets = document.querySelectorAll('#bracket path')

  brackets.forEach(bracket => {
    bracket.style.setProperty('--length', bracket.getTotalLength())
  })

  if (
    !('IntersectionObserver' in window) ||
    !('IntersectionObserverEntry' in window) ||
    !('intersectionRatio' in window.IntersectionObserverEntry.prototype)
  ) {
    brackets.forEach(bracket => bracket.classList.add('js-animate'))
  } else {
    let observer = new IntersectionObserver(entry => {
      if (entry[0].intersectionRatio > 0) {
        brackets.forEach(bracket => bracket.classList.add('js-animate'))
      } else {
        brackets.forEach(bracket => bracket.classList.remove('js-animate'))
      }
    })

    observer.observe(section)
  }
}

export default Divider
