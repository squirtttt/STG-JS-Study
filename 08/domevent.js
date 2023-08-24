    var pic = document.querySelector('#pic');
    pic.addEventListener("mouseover", changePic, false); //1) 이벤트 유형 2) 함수 3) 캡쳐 여부(이벤트를 캡쳐링할 것인지? 이벤트 캡쳐링은 dom의 부모노드에서 자식노드로 이벤트가 전달되는 것, 이벤트 버블링은 돔의 자식노드에서 부모노드로 이벤트가 전달되는 것)
    pic.addEventListener("mouseout", originPic, false);

    
		function changePic() {			
			pic.src = "images/boy.png";
    }
    function originPic() {
      pic.src = "images/girl.png";
    }