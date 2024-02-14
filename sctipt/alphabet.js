function continueGame(){
  const alphabet = getRendomAlphabet();
    // console.log(alphabet);

  const currentAlphabateElement = document.getElementById('current_alpabate');  
  currentAlphabateElement.innerText = alphabet;
}


function play(){
  window.location.href = "game.html"
  continueGame();
} 