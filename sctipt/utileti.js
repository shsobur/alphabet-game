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
