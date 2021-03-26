
var len= prompt("Enter The Length Of Array:")

var arr1=[];
for(i=0;i<len; i++){
arr1[i]=prompt("Enter Values in Array");
}

document.writeln("<p><b>Array 1:</b></p>" +arr1);

arr2=arr1.slice(prompt("Enter Starting Index From Where You Want To Start Add Value"),prompt("Enter Ending Index Till You Want To Add Value"))

document.writeln("<p><b>Array 2:</b></p>" +arr2);