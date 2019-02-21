import ClipboardJS from 'clipboard'
import tippy from 'tippy.js'

const Clipboard = () => {
  let linkIcon = document.getElementsByClassName('icon-link')
  let url = window.location.href

  if (!linkIcon) return

  let clip = new ClipboardJS(linkIcon, {
    text: function() {
      return url
    }
  })

  clip.on('success', () => {
    console.log('ello');
  }).tippy('.icon-link', {
    arrow: 'true',
    trigger: 'click',
    content: '<span style="padding: 2px">Copied!</span>'
  })
}
export default Clipboard
