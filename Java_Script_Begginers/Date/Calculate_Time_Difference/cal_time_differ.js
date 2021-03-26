
var date1 = new Date("June 14 2019 10:45:25");
var date2 = new Date("June 11 2019 10:45:25");

console.log("Date 1 : " +date1);
console.log("Date 2 : " +date2);

//calculate time differene in miliseconds
var Time_Diff = date1 - date2;
console.log("Time Difference In Milliseconds : " +Time_Diff);

//Calculate millisecond in a day
var Time_In_Day = 24 * 60 * 60 * 1000;
console.log("Milliseconds In A Day : " +Time_In_Day);

var Days_Diff =  Time_Diff/ Time_In_Day;
console.log("Difference In A Days : " +Days_Diff);













