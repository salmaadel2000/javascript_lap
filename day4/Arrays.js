/********** rest ... */

// const getData=function(){

//     // array-like  arguments sort filter push ,pop
//     let numbers=[...arguments];
// }

const sum=function(number,...array){ //rest

    //arguments
    console.log(number,array);
}
sum(1,2,3,4);
sum(1,2,3,4,5,6,8);
/**********
 * spread
 */
//1-
// Math.max(...numbers);
// //2- 
// let numbers_clone=[...numbers];//;numbers;

// //3- gathering
// let grade_lab1=[2,1,4,3];
// let grade_lab2=[20,10,40,30];

// let os_grades=[...grade_lab1,...grade_lab2];
