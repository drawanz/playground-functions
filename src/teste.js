/* 
a -> 1
e -> 2
i -> 3
o -> 4
u -> 5 */

let str = "hi there!"
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
let newString = newArr.join("");
console.log(newString);
