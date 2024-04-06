function calcAverage(){
let number,sum=0;
let count=getIteration();
for(let i=0;i<count;i++){
  number=Number (checkValue(i+1));
        sum+=number;
}
console.log(sum);
}


function checkValue(num){
    let value;
    do{
     value=prompt( `add num ${num}`);
    }
    while(isNaN(value) || value == '' || value==null)
    return value;
}


function getIteration(){
    let value;
    do{
     value=prompt( "add count for atraion");
    }
    while(isNaN(value) || value == '' || value==null)
    return value;
}


function calcAverage(){
   let sum=0;
   for(let i=0 ; i<arguments.length ; i++){
    sum+=arguments[i];
   }
   return sum/arguments.length;
}

function checkWinner(f_team , s_team){
if(f_team > s_team)
{
    console.log("winner is team1")
}else{
    console.log("winner is team 2")
}
}





