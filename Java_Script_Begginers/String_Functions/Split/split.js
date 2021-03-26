
//The split function is used to split a string into an array of substring, and returs the new array.

var a = "To be or not to be";
var b = a.split(" "); //split with space
document.write("<p>B :</p>" +b );
console.log("B : " +b );

var c = "To|be|or not to|be";
var d = c.split("|"); //split with pipe symbol
document.write("<p>D :</p>" +d );
console.log("D : " +d );

var e = "To,be,or not to,be";
var f = e.split(","); //split with , symbol
document.write("<p>F :</p>" +f );
console.log("F : " +f );


var g = "To be or not to be";
var h = e.split(""); //split without space
document.write("<p>H :</p>" +h );
console.log("H :" +h );

