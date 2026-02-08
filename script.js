function celebrate() {
  const mainGif = document.getElementById('main-gif');
  const question = document.getElementById('question');
  const buttons = document.querySelector('.button-group');

  // 1. Change the GIF - Replace 'success-gif.gif' with your second filename
  mainGif.src = "IMG_0498.gif";

  // 2. Change the text
  question.innerText = "Yay! See you on the 14th! ❤️";

  // 3. Hide the buttons
  buttons.style.display = "none";
}
