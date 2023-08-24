var itemList=[];
var addBtn = document.querySelector('#add');
addBtn.addEventListener("click", addList); //addBtn을 클릭하면 addList함수를 실행함


function addList() {
    var item = document.querySelector("#item").value;

    if(item != null){
        itemList.push(item);
        document.querySelector("#item").value = "";
        document.querySelector("#item").focus() //focus함수를 이용하면 해당 요소에 포커수를 주는 효과로 텍스트필드 안에 커서를 둘 수 있다. 
    }

    showList();
}


function showList(){
    var list = "<ul>";
    for (var i=0; i<itemList.length;i++){
        list += "<li>" +itemList[i]+ "<span class = 'close' id="+i+">X</span></li>";
    }
    list += "</ul>"

    document.querySelector("#itemList").innerHTML = list;

    var remove = document.querySelectorAll(".close");
    
    for (var i=0; i<remove.length;i++){
        remove[i].addEventListener("click", removeList);
    }
}

function removeList(){
    var id = this.getAttribute("id");
    itemList.splice(id,1);
    showList();
}