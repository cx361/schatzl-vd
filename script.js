function celebrate() {
  const mainGif = document.getElementById('main-gif');
  const buttons = document.querySelector('.button-group');

  // 1. Change the GIF - Replace 'success-gif.gif' with your second filename
  mainGif.src = "IMG_0498.gif";

  // 3. Hide the buttons
  buttons.style.visibility = "hidden";
}
