

var date = new Date();

document.write("<b>Year :</b>"+ date.getFullYear());

document.write("<br> <b>Month :</b>" +date.getMonth());

document.write("<br> <b>Date :</b>" +date.getDate());

document.write("<br> <b>Day :</b>" +date.getDay());

document.write("<br> <b>Hours :</b>" +date.getHours());

document.write("<br> <b>Minutes :</b>" +date.getMinutes());

document.write("<br> <b>Seconds :</b>" +date.getSeconds());

document.write("<br> <b>Milliseconds :</b>" +date.getMilliseconds());

document.write("<br> <b>TimeStamp :</b>" +date.getTime());








var date = new Date("June 14 2019 10:45:25");

document.write("<br><br><b>Year :</b>"+ date.getFullYear());

document.write("<br> <b>Month :</b>" +date.getMonth());

document.write("<br> <b>Date :</b>" +date.getDate());

document.write("<br> <b>Day :</b>" +date.getDay());

document.write("<br> <b>Hours :</b>" +date.getHours());

document.write("<br> <b>Minutes :</b>" +date.getMinutes());

document.write("<br> <b>Seconds :</b>" +date.getSeconds());

document.write("<br> <b>Milliseconds :</b>" +date.getMilliseconds());

document.write("<br> <b>TimeStamp :</b>" +date.getTime());



var date1 = new Date("June 14 2019 10:45:25");

date1.setFullYear(2020);

date1.setMonth(4);


document.write("<br><br><b>Year :</b>"+ date1.getFullYear());

document.write("<br> <b>Month :</b>" +date1.getMonth());

document.write("<br> <b>Date :</b>" +date1.getDate());


//Converting numeric Day into Week Form
var daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturaday"]
var date1 = new Date("June 14 2019 10:45:25");
var day =date1.getDay();
var nameofday=daylist[day];

document.write("<br> <b>Day :</b>" +nameofday);



