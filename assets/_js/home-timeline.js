const Timeline = () => {
  const timelineTitles = Array.from(
    document.querySelectorAll('.js-toggle_timeline_details')
  )

  timelineTitles.forEach(el => {
    const container = el.parentNode.parentNode

    el.addEventListener('click', e => {
      let pressed = e.target.getAttribute('aria-pressed') === 'true'
      e.target.setAttribute('aria-pressed', String(!pressed))

      container.classList.toggle('js-details-visible')
    })

    el.addEventListener('mouseenter', () => {
      container.classList.add('js-event-hover')
    })

    el.addEventListener('mouseleave', () => {
      container.classList.remove('js-event-hover')
    })
  })
}

export default Timeline
