let ball={
    top:5,
    left:6,
    color:"red",
    rad:3,
    calculateArea(){
     let area=this.rad*this.rad*3.14
     console.log(area) 
     console.log(this)
    },
    toString(){
     return `the top is ${this.top} the left is ${this.left}`
    },
    calc:()=>{
        let area=ball.rad*ball.rad*3.14
        console.log(area) 
    }
}
let ball2={...ball,top:7,left:6,color:"green"}
let ball3={...ball,top:5,left:8,color:"blue"}
let arr=[ball,ball2,ball3]

arr.forEach((item)=>{
 console.log(item.color,item.calc())
})
arr.sort((a, b) => {
    if (a.top !== b.top) {
        return a.top - b.top;
    }
    return a.left - b.left;
});
console.log(arr)
