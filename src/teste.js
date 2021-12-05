/* ["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas" */ 


 function techList(arr, nome) {
    arr.sort();
    let techLista = [{}];
    for (let x; x < arr.length; i +=1){
    if (arr[x] !== "React" || arr[x] !== "Jest" || arr[x] !== "HTML" ||arr[x] !== "CSS" ||arr[x] !== "JavaScript"){
      techLista = "Vazio!"
    }
      
      else{  for (let i in arr.sort()){
            techLista[i] = {
                tech: arr[i],
                name: nome   
        } 
      }
    }
  }  
  console.log(techLista);
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"); 

/* function techList(arr, nome) {
  arr.sort();
    let techLista = [{}];
    for (let i in arr.sort()){
        techLista[i] = {
            tech: arr[i],
            name: nome        
    }
  }
console.log(techLista); 
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"); */



  