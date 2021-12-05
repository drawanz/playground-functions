/* 
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5 */

let str = "h3 th2r2!"
let arr = str.split('');
let newArr = [];

for (let i =0; i < arr.length; i +=1){
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
let newString = newArr.join("");
console.log(newString);
