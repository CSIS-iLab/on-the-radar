import tippy from 'tippy.js'

const Tippy = () => {
  tippy('#t1', {
    theme: 'otr',
    arrow: false,
    arrowTransform: 'scale(1,4)',
    hideOnClick: true,
    placement: 'left',
    flipBehavior: ['left', 'top'],
    followCursor: true,
    onMount(tip) {
      formatContent(tip)
    }
  }),
    tippy('#t2', {
      theme: 'otr',
      arrow: false,
      hideOnClick: true,
      interactive: false,
      flipBehavior: ['left', 'top'],
      placement: 'left',
      followCursor: true,
      onMount(tip) {
        formatContent(tip)
      }
    }),
    tippy('#t3', {
      theme: 'otr',
      arrow: false,
      hideOnClick: true,
      interactive: false,
      flipBehavior: ['right', 'top'],
      placement: 'right',
      followCursor: true,
      onMount(tip) {
        formatContent(tip)
      }
    }),
    tippy('#t4', {
      theme: 'otr',
      arrow: false,
      hideOnClick: true,
      interactive: false,
      placement: 'right',
      flipBehavior: ['right', 'bottom'],
      followCursor: true,
      onMount(tip) {
        formatContent(tip)
      }
    })
}

const formatContent = tip => {
  let tipRef = tip.reference
  let content = tipRef.dataset.vocab
  let splitcontent = content.split('')
  let spans = '<span>' + splitcontent.join('</span><span>') + '</span>'
  let textContent =
    `<div class="definition"><div class="def-text"><div class="def-text-inner">` +
    spans +
    `</div>	</div></div>`

  tip.setContent(textContent)
}

export default Tippy
