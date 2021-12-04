/* eslint-disable no-empty */
// Desafio 1
function compareTrue(valor1, valor2) {
    if (valor1 === true && valor2 === true) {
      return true
    } else {
      return false
    }
 }

// Desafio 2
function calcArea(base, height) {
    return (base*height)/2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4

function concatName(array) {
  return (array[array.length-1]) + ", " + (array[0]);
}
  
// Desafio 5
function footballPoints(wins, ties) {
  return ((wins*3)+(ties*1));
}


// Desafio 6
function highestCount(array) {
  let resultado = 0;
  let repete = 0;

  for (let i = 0; i < array.length; i += 1){
    if (array[i] >= resultado){
      resultado = array[i];
    } 
    else if (array[i] < 0){
      resultado = array[i];
    }
    else{
      resultado = resultado;
    }
    }   
    for ( let i = 0; i < array.length; i += 1){
      if (array[i] === resultado){
        repete +=1;
      }
      else {
        repete = repete;
    }
    }   
    return(repete);
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
