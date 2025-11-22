const leftButton = document.querySelector(".main__left-button");
const rightButton = document.querySelector(".main__right-button");

const image = document.querySelector("#image");

const circles = document.querySelectorAll(".main__circles div");
const headings = document.querySelectorAll(".main__navigation li");

const city = document.querySelector(".main__city p");
const aps = document.querySelector(".main__apartament p");
const repair = document.querySelector(".main__repair p");

rightButton.addEventListener("click", moveToTheRight);
leftButton.addEventListener("click", moveToTheLeft);

headings.forEach((elem, index)  => {
    elem.addEventListener("click", () => {
        switchingSlides(index);
    });
});

circles.forEach((elem, index)  => {
    elem.addEventListener("click", () => {
        switchingSlides(index);
    });
});


let index = 0;
let atributes = [
    {
        city: "Rostov-on-Don<br>LCD admiral",
        aps: "81 m2",
        repair: "3.5 months",
        src: "./Images/FirstImage.png"
    },
    {
        city: "Sochi Thieves",
        aps: "105 m2",
        repair: "4 months",
        src: "./Images/SecondImage.png"
    },
    {
        city: "Rostov-on-Don<br>Patriotic",
        aps: "93 m2",
        repair: "3 months",
        src: "./Images/ThirdImage.png"
    }
];

function addItems (num) {
    circles[num].classList.add("activeCircle");
    headings[num].classList.add("activeNavName");

    city.innerHTML = atributes[num].city;
    aps.textContent = atributes[num].aps;
    repair.textContent = atributes[num].repair;
    image.setAttribute("src", atributes[num].src);
};

function removeItems (num) {
    circles[num].classList.remove("activeCircle");
    headings[num].classList.remove("activeNavName");
};

function moveToTheRight () {
    removeItems(index);
    index++;
    if (index > atributes.length - 1) {
        index = 0
    };
    addItems(index);
};

function moveToTheLeft () {
    removeItems(index);
    index--;
    if (index < 0) {
        index = atributes.length - 1
    };
    addItems(index);
};

function switchingSlides (n) {
    removeItems(index);
    addItems(n);

    index = n;
};