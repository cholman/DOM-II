// Your code goes here
const funBus = document.querySelector("header.intro > img");

funBus.addEventListener('mouseenter', () => {
    funBus.style.transform = "skew(-20deg, 0)";
});
funBus.addEventListener('mouseleave', () => {
    funBus.style.transform = "skew(0)";
})
funBus.addEventListener('load', () => {
    funBus.style.transform = "scale(2)";
})

const map = document.querySelector(".img-content > img");
map.addEventListener('click', () => {
    map.style.borderRadius = "100%";
    map.style.transform = "scale(2)";
    event.stopPropagation();
});

const boat = document.querySelector(".img-fluid");

boat.addEventListener('wheel', () => {
    boat.style.transform = "rotate(30deg)";
});

const cruise = document.querySelector(".content-destination > img");

cruise.addEventListener('dblclick', () => {
    cruise.style.transform = "scale(2)";
    cruise.style.transform = "rotate(-30deg)";
    stopPropagation();
})

const title = document.querySelector("h1");

title.addEventListener('mouseover', event => {

    title.style.transform = "rotate(180deg)";
})

const home = document.querySelector(".home");

home.addEventListener('click', () => {
    home.style.background = "red";
})

const intro = document.querySelector(".intro");

intro.addEventListener('contextmenu', () => {
    intro.style.background = "green";
    event.stopPropagation();
})

const header = document.querySelector("header");
header.addEventListener('drag', () => {
    header.style.backgroundColor = "yellow";
})

window.addEventListener('resize', () => {
    header.style.backgroundColor = "blue";
})

const stopLink = document.querySelectorAll("a");

stopLink.forEach(link => {
    addEventListener("click", (event) => {
    event.preventDefault();
})})
 