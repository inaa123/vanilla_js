//const loginForm = document.getElementById("login-form"); 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    const username = loginInput.value;
    console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
/* 
//5일
const h1 = document.querySelector(".hello:first-child h1"); //title element 찾는 법

function handleTitleClick() {
    const clickedClass = "clikced"; //string을 변수에 저장해서 사용하면 유용함. 
    if (h1.classList.contains(clickedClass)) { // clickedClass가 h1의 classList에 포함되어 있다면 clickedClass를 지운다(remove);
        h1.classList.remove(clickedClass);
    } else { //clickedClass가 h1의 classList에 포함되어 있지 않다면 clickedClass를 추가한다.(add)
        h1.classList.add(clickedClass);
    }
}

function handleTitleClick() {
    //const clickedClass = "clicked";
    h1.classList.toggle("clicked"); //toggle을 사용할 경우 "clicked"를 한번만 쓰기 때문에 const clickedClass = "clicked"하지 않고 바로 clicked 쓰면 도ㅚㅁ
}

h1.addEventListener("click", handleTitleClick);


// 4일
const h1 = document.querySelector(".hello:first-child h1"); //title element 찾는 법

function handleTitleClick() {
    h1.style.color = "blue";
}

function handleMouseEnter() {
    h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI!");
}

function handleWindowOnline() {
    alert("All GOOD!");
}

h1.addEventListener("click", handleTitleClick); // click 이벤트를 listen하고 클릭 이벤트 발생시 handleTitleClick이란 function이 작동. ()넣지 않기!! 주의
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);


// 1~3일
function sayHello(nameOfPerson, age) { //sayHello로 보내진 첫번ㅉ ㅐ 데이터가 nameOfPerson의 변수로 간다.
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10); // ()안에 있는 데이터를 보낸다. 그럼 그 데이터는 어떻게 받는가? sayHello함수의 ()에 데이터를 추가한다.
sayHello("juyeon", 24); // 첫번째 변수(nameOfPerson)엔 첫번째 인자("juyeon")의 데이터가 전달, 두번째 변수엔 두번째 인자데이터가 전달됨.
sayHello("ina", 25);
sayHello("sungjae", 27);

function plus(a, b) { 
    console.log(a , b);
}
plus();

const player = {
    name : "nico",
    sayHi : function(otherPersonsName) {
        console.log("hello" + otherPersonsName + " nice to meet you!");
    }
};

console.log(player.name);
player.sayHi("hyyy");
*/