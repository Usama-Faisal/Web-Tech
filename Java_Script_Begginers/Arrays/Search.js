

var len= prompt("Enter Length Of Array:")

var arr=[];
for(i=0;i<len; i++){
arr[i]=prompt("Enter Values in Array");
}


var search=prompt('Enter Value To Search');

var bool=true;


for(var i=0; i<arr.length; i++)
{
    if(search==arr[i])
    {
        document.writeln(search + " value is found on index "+ i)
        bool=false;
    }

}
if(bool)
{
    document.write(search + " value is not present in array")
}

for(var i=0; i<f.length; i++)
{
document.write("\t"+arr[i])
}