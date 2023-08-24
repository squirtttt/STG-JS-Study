function newRegister(){
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var nameList = document.querySelector("#nameList"); //namelist가져옴
    var newText = document.createTextNode(userName.value);
    var delBtn = document.createElement("span");
    var delText = document.createTextNode("X");
    var removeBtns = document.querySelectorAll(".del");


    newP.appendChild(newText);
    //nameList.appendChild(newP);
    nameList.insertBefore(newP, nameList.childNodes[0]);
    userName.value = "";

    delBtn.setAttribute("class", "del");
    delBtn.appendChild(delText);
    newP.appendChild(delBtn);
   

    for (var i=0; i<removeBtns.length; i++){
        removeBtns[i].addEventListener("click", function(){
            if(this.parentNode.parentNode){
                this.parentNode.parentNode.removeChild(this.parentNode);
            } //코드 상에는 문제가 없는데 remove가 정상 동작하지 않는다.
        });
    }
}