
const body = document.body;

const bigScreen = "bigScreen";
const mediumScreen = "mediumScreen";
const smallScreen = "smallScreen";

function handleResize() {
    const width = window.innerWidth;

    if(width > 1000) {
        body.classList.add(bigScreen);
        body.classList.remove(mediumScreen);
    } else if(width <= 1000 && width >= 700) {
        body.classList.add(mediumScreen);
        body.classList.remove(smallScreen, bigScreen);
    } else {
        body.classList.add(smallScreen);
        body.classList.remove(mediumScreen);
    }

}

window.addEventListener("resize", handleResize);