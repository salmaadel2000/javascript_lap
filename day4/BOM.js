
/************  window objects */    //intervals==timers (async tasks --> web API) 
// setInterval(function(){},1000)   every time by ms 
// setTimeout() 

//open
// let id=setInterval(function(){
//     console.log("HI");
// },1000);

//kill
// clearInterval(id);



// console.log("start");
// let id=setTimeout(function(){     //async
//     console.log("HI out");
// },3000);
// console.log("end");


//kill
// clearInterval(id);  // clearTimeout(id)--> old method

let allImg = document.images;
console.log(allImg)
let imges = document.querySelectorAll("img");
console.log(imges);
// +++++++++++++=========
var x = document.querySelector("select");
var txt = "";
for (let i = 0; i < x.length; i++) {
    txt += x.options[i].text;
}
console.log(txt);
// ++++++++++++++++=
let table = document.getElementById("bPink");
let td = table.querySelectorAll("td");
console.log(td);
// +++++++++++++++++++++++
let y = document.getElementsByClassName("bGrey fontBlue");
console.log(y);
// +++++++++++++++++++

let createList = function (trackId, parentElement) {
    let trackList = document.createElement("ul");
    trackList.id = trackId;
    parentElement.appendChild(trackList);
    console.log(parentElement)
}

// +++++++++++++++++++++++++
let addItem = function (courseName, trackList) {
    let trackItem = document.createElement("li");
    trackItem.textContent = courseName;
    trackList.appendChild(trackItem);
    return trackList;
}


// +++++++++++++++++++++++++=

let removeItem = function (courseName, ListTrackElement) {
    let list = ListTrackElement.getElementsByTagName('li');
    for (let i = 0; i < list.length; i++) {
        if (list[i].textContent == courseName) {
            ListTrackElement.removeChild(list[i]);
            break;
        }
    
    }
}

// +++++++++++++++++++
let moveItem=function (courseName, targetList,sourceList){
    removeItem(courseName,sourceList);
    addItem(courseName,targetList);
}
// +++++++++++++++++++
function changeImg(){
 
    let img = document.querySelector('img.fake');
        if (img.src.includes('images/1.jpg')) {
            img.src = 'images/2.jpg';
        } else {
            img.src = 'images/1.jpg';
        }
    
}setInterval(changeImg, 1000);




