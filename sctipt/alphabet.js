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