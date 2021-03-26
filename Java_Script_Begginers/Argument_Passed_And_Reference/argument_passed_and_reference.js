//Does not effect on value data type
var a = 67;

function test(num){
    document.write("<br>Num Before = " +num);
    num = 4;
    document.write("<br>Num After = " +num);
}

test (a);
document.write("<br>A after = " +a);

//It effecys on array "a" when we update num value 
var a = [45,5,9,2];
function test(num){
    document.write("<br><br>Num Before = " +num);
    num[2] = 4;
    document.write("<br>Num After = " +num);
}

test (a);
document.write("<br>A after = " +a);

//but we make num value also an array so it doesnot effect the array a
var a = [45,5,9,2];
function test(num){
    document.write("<br><br>Num Before = " +num);
    num = [1,2,3,4];
    document.write("<br>Num After = " +num);
}

test (a);
document.write("<br>A after = " +a);
