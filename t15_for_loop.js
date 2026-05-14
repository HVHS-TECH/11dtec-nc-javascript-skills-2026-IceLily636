/* Paste your code from the last task */
/* Paste your code from the last task */
/* Paste your code from the last task */
/****************************
Name of task: loop
****************************/
console.log("t02_variables.js")
console.log("hi")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
// variables

let username;
let year = 2026;
let age;
let money;
let birthyear =2011;
let oldage;
let newmoney;
let newermoney;
let change;
let chocolateOptions = ["You loath chocolate","Chocolate is meh", "Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];

function calculateChange(_money, _price){
let change = _money - _price
return change;
}

function writeline(){
    OUTPUT.innerHTML = "<h1>welcome to the shop</h1>";}
function item1(_name, _price){
OUTPUT.innerHTML += "<P>" + _name + "$"+ _price + "</p>";
}

function getFormInput(){
const NAME_FIELD = document.getElementById("nameField");
username = NAME_FIELD.value;
const AGE_FIELD = document.getElementById("ageField");
age = Number(AGE_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
money = Number(MONEY_FIELD.value);
newmoney = money/2;
oldage = age + 10;
newermoney = newmoney+3;
const CHOCOLATE_FIELD = document.getElementById("chocolateField");
_chocolate = Number(CHOCOLATE_FIELD.value);

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
item1("Chocolate bar ",4)
item1("Chips ",3)
item1("Drink ",2.50)
OUTPUT.innerHTML+="<p>"+chocolateOptions[_chocolate]+"</p>";
OUTPUT.innerHTML += "<p>Your name is"+username+"</p>";
OUTPUT.innerHTML+="<h2>Hi " + username +" As of " + year + " you are " + age + " years old. As of " + year + " you have " + money + "dollars</h2>";
OUTPUT.innerHTML+="<h2> You were born in " + birthyear+ "</h2>";
OUTPUT.innerHTML+="<h2>In 10 years you will be " + oldage + " years old</h2>";
OUTPUT.innerHTML+="<h2>You have " +money+ " dollars</h2>";
OUTPUT.innerHTML+="<h2>You spend half of your money, now you have" + newmoney+ "dollars</h2>";
OUTPUT.innerHTML+="<h2>Then you get $3, now you have " +newermoney+ " dollars</h2>";
if(newermoney >= 4){
    OUTPUT.innerHTML +="<p>A chocolate bar is 4 dollars, you can afford it</p>"
    change = calculateChange(newermoney,4)
    OUTPUT.innerHTML +="<p>Your change is" +change+ "Dollars</p>"
}
else{
    OUTPUT.innerHTML +="<p>A chocolate bar is 4 dollars ,you cant afford it.</p>"
}
 /*****************************
 functions
 ***************************/
}

