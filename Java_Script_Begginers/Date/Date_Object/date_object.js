// This application shows the date according to the system. 
// java script generates time in behalf of miliseconds and count miliseconds from 1 january 1970


//4 Methods To Create Date Object

//Method 1
var date1 = new Date();
document.write("<b>Date1 : </b>" +date1);

//Method 2
var date2 = new Date(2019, 7, 11, 10, 25, 40, 300);
document.write("<br> <b>Date2 : </b>" +date2);

//Method 3
var date3 = new Date("2021/9/8 10:15:15");
document.write("<br> <b>Date3 : </b>" +date3);

var date3_1 = new Date("January 12 2019 10:15:15");
document.write("<br> <b>Date3 : </b>" +date3_1);


//Method 4
var date4 = new Date(1565501140300);
document.write(" <br> <b>Date4 : </b>" +date4);


//Unix Time

var unix_time = new Date();
//It provides a time stamp which means it provide the time from 1 jan 1970 till your present time in milisecond
document.write(" <br><br> <b>Unix Time : </b>" +unix_time.getTime());

var epoch_time = new Date(0);
//It proides the start point of time 
document.write(" <br><br> <b>Epoch Time : </b>" +epoch_time);
