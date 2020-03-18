window.addEventListener('DOMContentLoaded', () => {
  const expandButton = document.getElementById('tableExpand')
  const closeButton = document.getElementById('tableClose')
  const main = document.querySelector('main')
  const modal = document.querySelector('.table__modal')
  const modalOverlay = document.querySelector('.table__modal-overlay')
  const body = document.body

  const FOCUSABLE_SELECTORS =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'

  expandButton.addEventListener('click', function() {
    body.classList.add('modal-active')
    modal.classList.add('is-active')
    modalOverlay.classList.add('is-active')

    const focusableElements = main.querySelectorAll(FOCUSABLE_SELECTORS)
    focusableElements.forEach(el => el.setAttribute('tabindex', '-1'))

    closeButton.focus()
    modal.removeAttribute('aria-hidden')
    main.setAttribute('aria-hidden', 'true')
  })

  function closeModal() {
    body.classList.remove('modal-active')
    modal.classList.remove('is-active')
    modalOverlay.classList.remove('is-active')

    const focusableElements = main.querySelectorAll(FOCUSABLE_SELECTORS)
    focusableElements.forEach(el => el.removeAttribute('tabindex'))

    expandButton.focus()
    modal.setAttribute('aria-hidden', 'true')
    main.removeAttribute('aria-hidden')
  }

  closeButton.addEventListener('click', closeModal)
  modalOverlay.addEventListener('click', closeModal)
})
