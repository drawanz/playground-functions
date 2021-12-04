/* Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

Para cada número do Array que seja divisível apenas por 3, apresente uma string "fizz";
Para cada número do Array que seja divisível apenas por 5, apresente uma string "buzz";
Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]. */
let array = [2, 15, 7, 9, 45]
function fizzBuzz(array) {
    let arr = [];
    for (let i = 0; i < array.length; i +=1){
      if ((array[i] % 3) === 0){
          arr.push("fizz");
      }
      else if ((array[i] % 5) === 0){
          arr.push("buzz");
      }
      else if ( (array[i] % 3) === 0 && (array[i] % 5) === 0){
          arr.push("fizzBuzz");
      }
      else if ( (array[i] % 3) !== 0 && (array[i] % 5) !== 0){
          arr.push("bug!");
      }
  }
      console.log(arr);
  }



