function getRendomAlphabet(){
  const stringAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = stringAlphabets.split('');


  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);


  const randomAlphabet = alphabets[index];
  return randomAlphabet;
}

function setBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.setAttribute("style", "background-color: #ffa500;");
}

function removeBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.removeAttribute("style", "background-color: #ffa500;");
}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function gameOver(){
  const playGround = document.getElementById('play_ground');
  playGround.setAttribute("style", "display: none;");

  const scoreBord = document.getElementById('finial_score');
  scoreBord.removeAttribute("style", "display: none;");

  const lastScore = document.getElementById('current_score');
  setElementValueById('last_score', lastScore.innerText);

  const currentAlphabate = getElementTextById('current_alpabate');
  removeBackgroundColor(currentAlphabate);
}

function setElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}