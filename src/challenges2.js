// Desafio 10
function techList(arr, nome) {
  arr.sort();
  let techLista = [{}];
    if ( arr.length === 0){
      techLista = "Vazio!"
      }
    
    else{  for (let i in arr.sort()){
          techLista[i] = {
              tech: arr[i],
              name: nome   
      } 
    }
  }
       return techLista;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
