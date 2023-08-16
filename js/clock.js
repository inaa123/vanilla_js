const clock = document.querySelector("h2#clock"); //h2와id같이 사용o, id만 사용o, getElementByid "clock"o => 모두됨
                                                //clock 디폴트 로 00시 00분 
function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()} : ${date.getMinutes()} :${date.getSeconds()}`;
}

setInterval(getClock, 1000);  //5초마다 sayHello함수 호출
//setTimeout(getClock, 5000); // 5초 후에 sayHello함수 호출