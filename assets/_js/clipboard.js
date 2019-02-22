import ClipboardJS from 'clipboard'
import tippy from 'tippy.js'

const Clipboard = () => {
  let linkIcon = document.getElementsByClassName('icon-link')
  let url = window.location.href

  if (!linkIcon) return

  let tooltip = tippy('.icon-link', {
    arrow: 'true',
    trigger: 'click',
    content: '<span style="padding: 3px">Copied!</span>'
  })

  let clip = new ClipboardJS(linkIcon, {
    text: function() {
      return url
    }
  })

  clip.on('success', () => {
    tooltip.show()
  })
}
export default Clipboard
