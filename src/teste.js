let array = [1, 9, 2, 3, 9, 5, 7];

let resultado = 0;
let repete = 0;
let negativo =0;

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
    
    /* return(repete); */
    
    console.log(repete);