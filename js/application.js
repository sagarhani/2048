// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

  // TODO: This code is in need of a refactor (along with the rest)
  var storage     = new LocalStorageManager;
  var noticeClose = document.querySelector(".notice-close-button");
  var notice      = document.querySelector(".app-notice");
  if (storage.getNoticeClosed()) {
    notice.parentNode.removeChild(notice);
  } else {
    noticeClose.addEventListener("click", function () {
      notice.parentNode.removeChild(notice);
      storage.setNoticeClosed(true);
      ga("send", "event", "notice", "closed");
    });
  }
>>>>>>> 0fc435451731c83d13cef40ebb46562b50a8efc0
>>>>>>> 11e226b056c274ba3f9025b16fa8067b1eb2f13d
});
