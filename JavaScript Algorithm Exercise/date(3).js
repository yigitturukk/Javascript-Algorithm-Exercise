//Write a JavaScript program to get the current date.  
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

var nowDate = new Date();

var nowDay = nowDate.getDate();
console.log(nowDay);

var nowMonth = nowDate.getMonth() + 1;


var nowYear = nowDate.getFullYear();
console.log(nowYear);

if (nowDay < 10){
    nowDay = "0" + nowDay;
}

if(nowMonth < 10){
    nowMonth = "0" + nowMonth;
}


console.log(nowDay + "/" + nowMonth +"/" + nowYear);