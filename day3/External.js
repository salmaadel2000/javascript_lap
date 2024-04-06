const convertLetter=function (input){
input =input.split(" ");
for(let i=0;i<input.length;i++){
    input[i] = input[i][0].toUpperCase() + input[i].substr(1);
}
let text =input.join(" ");
 return text;
}

// +++++++++++++++++++++++++++++++++++++++++
const countLenght=function(input){
    input =input.split(" ");
    let long=input[0];
    for(let i=1;i<input.length;i++){
       if( long.length<input[i].length){
         long=input[i] 
       }
    }
    
 return long;
}
// +++++++++++++++++++++++++++++++++++++++++
const orderCharacter=function (input){
    input =input.split("");
    let big= input.sort().join('')
   
 return big
}
// +++++++++++++++++++++++++++++++++++++++++
const selectMonth=function(input){
   let mons =[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mons[input.getMonth()];
}
// +++++++++++++++++++++++++++++++++++++++++
const randomNum=function() {
        let randomNumbers= [];
        while (randomNumbers.length < 5) {
            let randomNum = Math.ceil(Math.random() * 10) ;
        
           
            if (!randomNumbers.includes(randomNum)) {
                randomNumbers.push(randomNum);
            }
          }
        
          return randomNumbers;
      }