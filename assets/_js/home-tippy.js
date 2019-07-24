import tippy from 'tippy.js'

const Tippy = () => {
  tippy('#t1', {
    theme: 'tomato',
    arrow: false,
    arrowTransform: 'scale(1,4)',
    hideOnClick: true,
    placement: 'left',
    flipBehavior: ['left', 'top'],
    onMount(tip) {
      formatContent(tip)
    }
  }),
    tippy('#t2', {
      theme: 'tomato',
      arrow: false,
      hideOnClick: true,
      interactive: false,
      flipBehavior: ['left', 'top'],
      placement: 'left',
      onMount(tip) {
        formatContent(tip)
      }
    }),
    tippy('#t3', {
      theme: 'tomato',
      arrow: false,
      hideOnClick: true,
      interactive: false,
      flipBehavior: ['right', 'top'],
      placement: 'right',
      onMount(tip) {
        formatContent(tip)
      }
    }),
    tippy('#t4', {
      theme: 'tomato',
      arrow: false,
      hideOnClick: true,
      interactive: false,
      placement: 'right',
      flipBehavior: ['right', 'bottom'],
      onMount(tip) {
        formatContent(tip)
      }
    })
}

const formatContent = tip => {
  let tipRef = tip.reference
  let content = tipRef.dataset.vocab
  let splitcontent = content.split('')
  console.log(splitcontent.length)
  let spans = '<span>' + splitcontent.join('</span><span>') + '</span>'
  let textContent =
    `<div class="definition"><div class="def-text"><div class="def-text-inner">` +
    spans +
    `</div>	</div></div>`

  tip.setContent(textContent)
}

export default Tippy
