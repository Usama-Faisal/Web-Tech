
var a=1;

document.write("<br<br>While Loop<br>");
while(a<5)
{
    document.write("Value of a =" +a+"<br>");
    a++;
}


// differnece between while loop and do-while loop is that:
// While loop doesnot execute the code when condition is not matched
//but
// Do while execute the code  once when condition is not matched

var b=1;

document.write("<br>Do-While Loop");
do
{
    document.write("<br>Value of b =" +b);
    b++;
}
while(b<1);