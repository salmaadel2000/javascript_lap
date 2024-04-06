var parent = document.getElementById("parent");
createList("os",parent);
// 
let unList=document.querySelector("div ul");
addItem("js",unList);
addItem("html",unList);
addItem("css",unList);
// 
removeItem("js",unList);
// 
let newUl=document.getElementById("new");
let oldUL=document.getElementById("os");
moveItem("css",newUl,oldUL)
console.log(newUl);
console.log(oldUL);