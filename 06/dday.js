var now = new Date(); //오늘 날짜 정보를 now객체로 만듦
var firstDay = new Date("2012-03-21"); //처음 만난 날 날짜 정보를 firstDay객체로 만듦
var toNow = now.getTime(); //오늘 날짜를 밀리초 단위로 바꿈
var toFirst = firstDay.getTime(); //처음 만난 날짜를 밀리초로 바꿈
var passedTime = toNow = toFirst; //처음 만난 날과 오늘 사이의 차이를 밀리 초로 계산
var passedDay = Math.round(passedTime/(1000*60*60*24)); //밀리초를 날짜 수로 변환한 다음 반올림


function calcDate(days){
    var future = toFirst + days *(1000*60*60*24); //처음 만난 날에 100일을 더한다.
    var someday = new Date(future); //future값을 사용해 date 객체 인스턴스를 만든다.
    var year = someday.getFullYear(); //연도를 가져와 year 변수에 저장한다.
    var month = someday.getMonth()+1; //월 정보를 가져와 month 변수에 저장한다.
    var date = someday.getDate(); //일 정보를 가져와 date 변수에 저장한다.

    document.querySelector("#date"+days).innerText = year+"년 "+month+"월 "+date+"일";
}

document.querySelector("#accent").innerText = passedDay +"일";

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

