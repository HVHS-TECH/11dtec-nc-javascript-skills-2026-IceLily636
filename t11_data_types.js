/* Paste your code from the last task */
/* Paste your code from task 5 here */
/****************************
Name of task: maths
****************************/
console.log("t02_variables.js")
console.log("hi")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
// variables
let age = Number(AGE_FIELD.value);
let username;
let year = 2026;
let age =15;
let money =200;
let birthyear =2011;
let oldage;
let newmoney;
let newermoney;
newmoney = money/2;
oldage = age + 10;
newermoney = newmoney+3;
function writeline(){
    OUTPUT.innerHTML = "<h1>welcome to the shop</h1>";
}

function getFormInput(){
let NAME_FIELD = document.getElementById("nameField");
username = NAME_FIELD.value;


console.log("Hi " + username +" As of " + year + " you are " + age + " years old. As of " + year + " you have " + money + "dollars");
console.log("You were born in " + birthyear)
console.log("In 10 years you will be " + oldage + " years old")
console.log("You have " +money+ " dollars")
console.log("You spend half of your money, now you have" + newmoney+ "dollars")
console.log("Then you get $3, now you have " +newermoney+ " dollars")

/****************************
 main code
 **********************/

writeline();
OUTPUT.innerHTML += "<p>Your name is"+username+"</p>";
OUTPUT.innerHTML+="<h2>Hi " + username +" As of " + year + " you are " + age + " years old. As of " + year + " you have " + money + "dollars</h2>";
OUTPUT.innerHTML+="<h2> You were born in " + birthyear+ "</h2>";
OUTPUT.innerHTML+="<h2>In 10 years you will be " + oldage + " years old</h2>";
OUTPUT.innerHTML+="<h2>You have " +money+ " dollars</h2>";
OUTPUT.innerHTML+="<h2>You spend half of your money, now you have" + newmoney+ "dollars</h2>";
OUTPUT.innerHTML+="<h2>Then you get $3, now you have " +newermoney+ " dollars</h2>";

 /*****************************
 functions
 ***************************/
}
