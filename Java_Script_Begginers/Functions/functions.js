
function Name(name)
{
    document.write("Hello " +name);
}

Name("Mike");

function Multiplication(num1,num2)
{
    document.write("<br><br>Number1 =" +num1);
    document.write("<br>Number2 =" +num2);
    document.write("<br>Number1 * Number2 = Result<br>")
    document.write(num1 + "*" + num2 + "=" + num1*num2);

}

Multiplication(2,4)


document.write("<h1>Return Functions</h1>")

function func_return(num1)
{
    return num1;
}

func_return(5);

var a=func_return(5);
document.write("<br><br>Value Of A = "+a)




function Mult_ret(num1,num2)
{
    return num1 * num2;
}

function Plus_ret(num1,num2)
{
    return Mult_ret(num1,num2) + num2;
}
 var total = Plus_ret(5,7);

 document.write("<br><br>Total = " +total);