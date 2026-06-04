/* Paste your code from the last task *//* Paste your code from the last task */
/* Paste your code from the last task */
/* Paste your code from the last task */
/****************************
Name of task: conditionals
****************************/
console.log("t02_variables.js")
console.log("hi")
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
// variables
const USER ={};

const YEAR = 2026;


const birthyear =2011;

let change;
let chocolateOptions = ["You loath chocolate","Chocolate is meh", "Chocolate is pretty good","Chocolate is the best thing EVER!!!!"];
let item;
let listArray = [];
function calculateChange(_money, _price){
let _change = _money - _price
return _change;
}
function displayList(){
OUTPUT.innerHTML= "<p>Your list</p>"    
for(let i=0; i<listArray.length; i++){
    OUTPUT.innerHTML += "<p>" +listArray[i]+"</p>"
}
}
function writeline(){
    OUTPUT.innerHTML = "<h1>welcome to the shop</h1>";}
function item1(_name, _price){
OUTPUT.innerHTML += "<P>" + _name + "$"+ _price + "</p>";
}
function getListFormInput(){
const LIST_FIELD = document.getElementById("listField");
item = LIST_FIELD.value;
OUTPUT.innerHTML ="<p>you have added" +item+ "to your list<p>"
listArray.push(item)
}
function getFormInput(){
     const MAIN_FORM = document.getElementById("mainForm");
    if (MAIN_FORM.checkValidity() === false) {
        OUTPUT.innerHTML = "Please fill out all fields correctly.<br>";
    } else {

const NAME_FIELD = document.getElementById("nameField");
USER.name = NAME_FIELD.value;
if(USER.name.length < 3){
OUTPUT.innerHTML="<p>ADD MORE LETTERS </p>"
}
else{
const AGE_FIELD = document.getElementById("ageField");
USER.age = Number(AGE_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
USER.money = Number(MONEY_FIELD.value);
USER.newmoney = USER.money/2;
USER.oldage = USER.age + 10;
USER.newermoney = USER.newmoney+3;
const CHOCOLATE_FIELD = document.getElementById("chocolateField");
_chocolate = Number(CHOCOLATE_FIELD.value);

 
//console logs
console.log("Hi " + USER.name +" As of " + YEAR + " you are " + USER.age + " years old. As of " + YEAR + " you have " + USER.money + "dollars");
console.log("You were born in " + birthyear)
console.log("In 10 years you will be " + USER.oldage + " years old")
console.log("You have " +USER.money+ " dollars")
console.log("You spend half of your money, now you have" + USER.newmoney+ "dollars")
console.log("Then you get $3, now you have " +USER.newermoney+ " dollars")

/****************************
 main code
 **********************/


writeline();

item1("Chocolate bar ",4)
item1("Chips ",3)
item1("Drink ",2.50)
OUTPUT.innerHTML+="<p>"+chocolateOptions[_chocolate]+"</p>";
OUTPUT.innerHTML += "<p>Your name is"+USER.name+"</p>";
OUTPUT.innerHTML+="<h2>Hi " + USER.name +" As of " + YEAR + " you are " + USER.age + " years old. As of " + YEAR + " you have " + USER.money + "dollars</h2>";
OUTPUT.innerHTML+="<h2> You were born in " + birthyear+ "</h2>";
OUTPUT.innerHTML+="<h2>In 10 years you will be " + USER.oldage + " years old</h2>";
OUTPUT.innerHTML+="<h2>You have " +USER.money+ " dollars</h2>";
OUTPUT.innerHTML+="<h2>You spend half of your money, now you have" + USER.newmoney+ "dollars</h2>";
OUTPUT.innerHTML+="<h2>Then you get $3, now you have " +USER.newermoney+ " dollars</h2>";
if(newermoney >= 4){
    OUTPUT.innerHTML +="<p>A chocolate bar is 4 dollars, you can afford it</p>"
    _change = calculateChange(newermoney,4)
    OUTPUT.innerHTML +="<p>Your change is" +_change+ "Dollars</p>"
}
else{
    OUTPUT.innerHTML +="<p>A chocolate bar is 4 dollars ,you cant afford it.</p>"
}
if(AGE_FIELD < 13){
    OUTPUT
}
if (AGE_FIELD.value < 13) {
  OUTPUT.innerHTML = " u are a Shmall child.<br>";
} else if (AGE_FIELD.value > 99) {
  OUTPUT.innerHTML = "UNC<br>";
}
 /*****************************
 functions
 ***************************/
}}}

