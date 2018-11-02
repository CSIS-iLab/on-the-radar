import tippy from 'tippy.js'

const Tippy = () => {
  tippy('.define', {
    theme: 'light',
    arrow: true,
    arrowTransform: 'scale(2,1.5)',
    hideOnClick: false,
    interactive: true,
    trigger: 'click',
    onMount(tip) {
      formatContent(tip)
      exitListener(tip)
    }
  })
}

const formatContent = tip => {
  let content = JSON.parse(tip.reference.dataset.content)
  let title = `<div class="definition__title">${content.title}</div>`
  let entry = `<span class="definition__entry">${content.entry}</span>`
  let slug = content.slug

  let textContent = `<div class="definition"><i class="icon-close"></i>${title}${entry}<a href="/glossary#${slug}">View in glossary</a></div>`

  tip.setContent(textContent)
}

const exitListener = tip => {
  let close = document.querySelector('.definition .icon-close')
  close.addEventListener('click', () => {
    tip.hide()
  })
}

export default Tippy
