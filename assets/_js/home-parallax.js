const ParallaxBg = () => {
  const speed = 0.1
  const backgrounds = Array.from(document.querySelectorAll('.js-parallax'))
  let lastScrollY = 0
  let ticking = false

  function onScroll() {
    lastScrollY = window.scrollY
    requestTick()
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update)
      ticking = true
    }
  }

  function update() {
    backgrounds.forEach(el => {
      const offsetTop = el.offsetTop
      let limit = offsetTop + el.offsetHeight

      if (lastScrollY > offsetTop && lastScrollY <= limit) {
        el.style.setProperty(
          '--scrollparallax',
          (window.pageYOffset - el.offsetTop) * speed
        )
      } else {
        if (lastScrollY > offsetTop) {
          el.style.setProperty(
            '--scrollparallax',
            (window.pageYOffset - el.offsetTop) * speed
          )
        } else {
          el.style.transform = ''
        }
      }
    })

    ticking = false
  }

  window.addEventListener('scroll', onScroll, false)
}

export default ParallaxBg
