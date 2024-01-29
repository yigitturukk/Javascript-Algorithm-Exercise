//Write a JavaScript program to display the current day and time in the following format.  
//Sample Output : Today is : Tuesday.
//Current time is : 12 : 30 : 38


//Solution:


var nowDate = new Date();

var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]; 
nowDay = nowDate.getDay();

var nowHour = nowDate.getHours();
var nowMinute = nowDate.getMinutes();
var nowSecond = nowDate.getSeconds();

console.log("Today is " + dayList[nowDay] + ".");
console.log("Current time is " + nowHour + ":" + nowMinute + ":" + nowSecond);





