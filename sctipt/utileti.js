function getRendomAlphabet(){
  const stringAlphabets = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = stringAlphabets.split('');


  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);


  const randomAlphabet = alphabets[index];
  return randomAlphabet;
}