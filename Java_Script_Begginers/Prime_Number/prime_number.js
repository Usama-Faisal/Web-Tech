var num = parseInt(prompt("Enter Number To Check Prime Number")); 
var bol = true;
for(var i=2; i<num; i++)
{
    var pn = num%i;
    if(pn == 0)
    {
        console.log(num + " is not a Prime Numberss");
        bol=false;
        break;
    }

   
}

if(bol){
    console.log(num + " is a Prime Number");

}
