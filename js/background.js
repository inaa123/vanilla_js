const images = ["0.jpg", "1.jpg", "2.jpg"]; //img폴더 안 이미지이름과 똑같이 작성

const chosenImage = images[Math.floor(Math.random() * images.length)]; //images배열에서 랜덤하게 한 이미지 선택

const bgImage = document.createElement("img"); // createElemet를 이용하여 img란 element 생성, img태그?생겼지만 아무데도 존재하지 않음
bgImage.src = `img/${chosenImage}`; //자바스크립트에서 html element를 생성함.(html img를 js로 생성!)
document.body.appendChild(bgImage);//bgImage를 body내부에 추가한다.
//appendChild()는 .body에 html을 추가한다.
console.log(bgImage);