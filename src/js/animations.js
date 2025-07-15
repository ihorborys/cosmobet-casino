const bonusText = document.querySelector('.content__banner_title_js');

function blinkText() {
  let opacity = 1;
  setInterval(() => {
    opacity = opacity === 1 ? 0 : 1;
    bonusText.style.opacity = opacity;
  }, 1000);
}

blinkText();
