let a = [ 9, 1, 2, 3, 9, 5, 7];

let resultado = 0;
let repete = 0;

for (let i = 0; i < a.length; i += 1){
    if (a[i] > resultado){
        resultado = a[i];
    } 
    else {
        resultado = resultado;
    }
}
console.log(resultado);

    for ( let i = 0; i < a.length; i += 1){
        if (a[i] === resultado){
            repete +=1;
        }
        else {
            repete = repete;
    }
    }   

    console.log(repete);