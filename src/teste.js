/* ["React", "Jest", "HTML", "CSS", "JavaScript"]
"Lucas" */ 


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



  