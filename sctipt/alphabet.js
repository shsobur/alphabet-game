function handalKeybordUpEvent(event) {
  const playerPressd = event.key;

  if (playerPressd === "Escape") {
    gameOver();
  }

  const currentAlphabateElement = document.getElementById('current_alpabate');
  const exptctedAlphabate = currentAlphabateElement.innerText;

  if (playerPressd === exptctedAlphabate) {

    const currentScoreElement = document.getElementById('current_score');
    const currentText = currentScoreElement.innerText;
    const currentScore = parseInt(currentText);

    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore

    removeBackgroundColor(exptctedAlphabate);
    continueGame()
  }
  else {
    const currentLifeElement = document.getElementById('current_life');
    const lifeText = currentLifeElement.innerText;
    const currentLife = parseInt(lifeText);

    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;

    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener('keyup', handalKeybordUpEvent);




function continueGame(){
  const alphabet = getRendomAlphabet();
    // console.log(alphabet);

  const currentAlphabateElement = document.getElementById('current_alpabate');
  currentAlphabateElement.innerText = alphabet;

  setBackgroundColor(alphabet);
}


function play(){
  let homeSection = document.getElementById('home_page');
  homeSection.setAttribute("style", "display: none;");

  let playGround = document.getElementById('play_ground');
  playGround.removeAttribute("style", "display: none");

  continueGame();
}

function playAgain(){
  let scoreBord = document.getElementById('finial_score');
  scoreBord.setAttribute("style", "display: none;");

  let playGround = document.getElementById('play_ground');
  playGround.removeAttribute("style", "display: none;");

  setElementValueById('current_life', 5);
  setElementValueById('current_score', 0);

  

  continueGame()
}