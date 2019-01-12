"use strict";

//Auto executes anonymous function
//IIFE - immediately invoked function expression
// let - replacement of var


let myGlobalVar = 0;
(function(){     
let myFunctionVar = 0;

function Start(){
let startVar = 1230;

myGlobalVar = "SID";        //Different datatype to same var
console.log(`%c App Started...  ${startVar}`,"font-size: 30px; color:blue;");
console.log(`%c App Started...  ${myGlobalVar}`,"font-size: 30px; color:blue;");
console.log("%c App Started...  ","font-size: 30px; color:blue;");
console.warn("%c App Started...  ","font-size: 30px; color:blue;");
console.error("%c App Started...  ","font-size: 30px; color:blue;");
}
window.addEventListener("load", Start);
})();