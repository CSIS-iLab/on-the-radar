const Divider = () => {
  const section = document.querySelector('.matter__divider')
  const brackets = document.querySelectorAll('#bracket path')

  let observer = new IntersectionObserver(entry => {
    if (entry[0].intersectionRatio > 0) {
      brackets.forEach(bracket => bracket.classList.add('js-animate'))
    } else {
      brackets.forEach(bracket => bracket.classList.remove('js-animate'))
    }
  })

  observer.observe(section)

  brackets.forEach(bracket => {
    bracket.style.setProperty('--length', bracket.getTotalLength())
  })
}

export default Divider
