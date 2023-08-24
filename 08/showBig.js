var bigPic = document.querySelector("#cup"); //큰 이미지 하나는 Id를 이용해 선택
var smallPics = document.querySelectorAll(".small"); //작은 이미지 여러개는 class 선택자를 이용해 선택

for (var i=0;i<smallPics.length; i++){
    smallPics[i].onclick=showBig;
}

function showBig(){
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
}