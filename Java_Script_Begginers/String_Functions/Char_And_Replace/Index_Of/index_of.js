var a="To be or not to be";

var b=a.indexOf("or");

document.writeln("<p>b = </p>" +b);

//It checks Value from 10 index forward
document.writeln("<p>b = </p>" +a.indexOf("To",10));

document.writeln("<p>b = </p>" +a.lastIndexOf("be"));

//It Checks Value from 10 index in backward
document.writeln("<p>b = </p>" +a.lastIndexOf("not",13));