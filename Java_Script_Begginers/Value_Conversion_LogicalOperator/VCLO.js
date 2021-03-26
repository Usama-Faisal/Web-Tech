var a = 6;
var b = 8;
var c = 0;
var d = "cat";
var e ="";
var f =undefined;

var d;

d = a && b;
console.log(d);
d = a && c;
console.log(d);
d = c && d;
console.log(d);
d = "" && c;
console.log(d);
d = f && e;
console.log(d);

var d;

d = a || b;
console.log(d);
d = a || c;
console.log(d);
d = c || d;
console.log(d);
d = "" || c;
console.log(d);
d = f || e;
console.log(d);
