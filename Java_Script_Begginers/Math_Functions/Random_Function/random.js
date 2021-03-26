//Math.random returns a random number between 0(inclusive) and 1(exclusive). It returns every time new number


var num= Math.random();
document.write(" Random Number : "+ num);

//If you want to to generte a random number between some range then you have to add some calculations like:
var num2= (num*6)+1; // range between 0-6
document.write(" Range : "+ num2);

var dice =Math.floor(num2) //it round of in lower range
document.write(" Dice : "+ dice);