var  userId = document.querySelector("#user-id"); //아이디 필드를 가져와 변수로 저장
var pw1 = document.querySelector("#user-pw1");
var pw2 = document.querySelector("#user-pw2");


userId.onchange = checkId; //userId요소에 change이벤트가 발생하면 checkId()를 실행하도록 지정한다.
pw1.onchange = checkPw;
pw2.onchange = comparePw; //pw2에 change이벤트가 발생했을 때 comparePw()함수를 실행하도록 지정

function checkId() {
    if(userId.value.length<4 || userId.value.length > 15){
        alert("4~15자리의 영문과 숫자를 사용하세요.");
        userId.select(); //다시 입력할 수 있도록 선택
    }
}

function checkPw(){
    if(pw1.value.length < 8){
        alert("비밀번호는 8자리 이상이어야 합니다. ");
        pw1.value = "";
        pw1.focus();
    }
}

function comparePw(){
    if(pw1.value != pw2.value){
        alert("암호가 다릅니다. 다시 입력하세요.");
        pw2.value = "";
        pw2.focus(); 
    }
}