const clock = document.querySelector("h2#clock"); //h2와id같이 사용o, id만 사용o, getElementByid "clock"o => 모두됨
                                                //clock 디폴트 로 00시 00분 
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //getClock을 먼저 호출하지 않으면 디폴트로 정해 둔 00:00:00이 보이고나서 시간이 갱신됨. getClcok()먼저 호출하면 바로 시작.
setInterval(getClock, 1000);  //5초마다 sayHello함수 호출
//setTimeout(getClock, 5000); // 5초 후에 sayHello함수 호출