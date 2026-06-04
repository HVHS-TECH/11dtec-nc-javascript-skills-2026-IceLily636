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
username = NAME_FIELD.value;
if(username.length < 3){
OUTPUT.innerHTML="<p>ADD MORE LETTERS </p>"
}
else{
const AGE_FIELD = document.getElementById("ageField");
age = Number(AGE_FIELD.value);
const MONEY_FIELD = document.getElementById("moneyField");
money = Number(MONEY_FIELD.value);
newmoney = money/2;
oldage = age + 10;
newermoney = newmoney+3;
const CHOCOLATE_FIELD = document.getElementById("chocolateField");
_chocolate = Number(CHOCOLATE_FIELD.value);


//console logs
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

