function shareLink() {
  var element = document.getElementById('share-link');
   element.select();
  document.execCommand('copy');
  element.blur();
}
