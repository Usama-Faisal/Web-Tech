
var len= prompt("Enter The Length Of Array:")

var arr=[];
for(i=0;i<len; i++){
arr[i]=prompt("Enter Values in Array");
}

document.writeln("<p><b>Array:</b></p>" +arr);
arr.splice(prompt("Enter Index Number Where You Want To Add value"),prompt("How many indexes you want to remove"),prompt("Enter Value Which You want to Add"))

document.writeln("<p><b>Update Array:</b></p>" +arr);
