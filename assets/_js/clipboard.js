import ClipboardJS from 'clipboard'
import tippy from 'tippy.js'

const Clipboard = () => {
  let linkIcon = document.getElementsByClassName('icon-link')
  let url = window.location.href

  if (!linkIcon) return

  new ClipboardJS(linkIcon, {
    text: function() {
      return url
    }
  })

  tippy('.icon-link', {
    arrow: 'true',
    trigger: 'click',
    interactive: true,
    content: '<span style="padding: 3px">Copied!</span>'
  })
}
export default Clipboard
