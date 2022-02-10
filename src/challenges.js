// Desafio 1
function compareTrue(valor1, valor2) { // linha de código fornecida pela escola Trybe
    if (valor1 === true && valor2 === true) {
      return true
    } else {
      return false
    }
 }

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4

function concatName(array) {
  return (array[array.length-1]) + ", " + (array[0]);
}
  
// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}


// Desafio 6
function highestCount(array) {
  let resultado = 0;
  let repete = 0;

  for (let i = 0; i < array.length; i += 1) {
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
    for ( let i = 0; i < array.length; i += 1) {
      if (array[i] === resultado){
        repete += 1;
      }
      else {
        repete = repete;
    }
  }   
  return(repete);
}

// Desafio 7
  function catAndMouse(mouse, cat1, cat2) {
    let positionCat1 = Math.abs(mouse - cat1);
    let positionCat2 = Math.abs(mouse - cat2);

    if (positionCat1 < positionCat2){ 
      return "cat1";
    }
    else if (positionCat2 < positionCat1){
      return "cat2";
    }
    else {
      return "os gatos trombam e o rato foge";
    } 
  }

// Desafio 8
function fizzBuzz(array) {
  let arr = [];
  for (let i = 0; i < array.length; i +=1){
    if ( (array[i] % 3) === 0 && (array[i] % 5) === 0){
        arr.push("fizzBuzz");
    }
    else if ((array[i] % 5) === 0){
        arr.push("buzz");
    }
    else if ((array[i] % 3) === 0){
        arr.push("fizz");
    }
    else if ( (array[i] % 3) !== 0 && (array[i] % 5) !== 0){
        arr.push("bug!");
    }
}
    return arr;
}

// Desafio 9
function encode(str) {
  let arr = str.split('');
  let newArr = [];

    for (let i =0; i < arr.length; i +=1){
        if ( arr[i] === "a"){
            newArr.push("1");
        }
        else if ( arr[i] === "e"){
            newArr.push("2");
        }
        else if ( arr[i] === "i"){
            newArr.push("3");
        }
        else if ( arr[i] === "o"){
            newArr.push("4");
        }
        else if ( arr[i] === "u"){
            newArr.push("5");
        }
        else{
            newArr.push(arr[i]);
        } 
        }
  let newStringCodificada = newArr.join("");
        return newStringCodificada;
}


function decode(newStringCodificada) {
let arr = newStringCodificada.split('');
let newArr = [];

    for (let i =0; i < arr.length; i +=1) {
      if ( arr[i] === "1"){
        newArr.push("a");
      }
      else if ( arr[i] === "2"){
        newArr.push("e");
      }
      else if ( arr[i] === "3"){
        newArr.push("i");
      }
      else if ( arr[i] === "4"){
        newArr.push("o");
      }
      else if ( arr[i] === "5"){
        newArr.push("u");
      }
      else{
        newArr.push(arr[i]);
      } 
    }
    let newStringDescodificada = newArr.join("");
    return newStringDescodificada;
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
