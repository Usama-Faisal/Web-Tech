var a="To be or not to be";

var b=a.charAt(7);

document.write("<p> b : </p>"+ b);

//replace a value which first which will be find first
//replace function does not replace value in its original variable
var b= a.replace("be","hello");
document.write("<p> b : </p>" +b);


//replace all values which will be find in entire string

var c= a.replace(/be/g,"hello");
document.write("<p> c : </p>"+ c);

//replace a First find value values with case sensitve
var a="To Be or not to bE";
var d= a.replace(/be/i,"hello");
document.write("<p> d : </p>"+ d);

//replace all values with case sensitve
var a="To Be or not to bE";
var e= a.replace(/be/ig,"hello");
document.write("<p> e : </p>"+ e);
