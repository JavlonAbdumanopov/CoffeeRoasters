document.getElementById("name").addEventListener("click", function () {
    this.classList.toggle("rotate");
    document.getElementById("name-dropdown").classList.toggle("none");
    document.querySelector(".title-name").classList.toggle("active-title");
});

document.getElementById("type").addEventListener("click", function () {
    this.classList.toggle("rotate");
    document.getElementById("type-dropdown").classList.toggle("none");
    document.querySelector(".title-type").classList.toggle("active-title");
});

document.getElementById("much").addEventListener("click", function () {
    this.classList.toggle("rotate");
    document.getElementById("much-dropdown").classList.toggle("none");
    document.querySelector(".title-much").classList.toggle("active-title");
});

document.getElementById("grind").addEventListener("click", function () {
    this.classList.toggle("rotate");
    document.getElementById("grind-dropdown").classList.toggle("none");
    document.querySelector(".title-grind").classList.toggle("active-title");
});

document.getElementById("often").addEventListener("click", function () {
    this.classList.toggle("rotate");
    document.getElementById("often-dropdown").classList.toggle("none");
    document.querySelector(".title-often").classList.toggle("active-title");
});


// Active Title*************************************
document.querySelector(".title-name").addEventListener("click", function () {
    this.classList.toggle("active-title");
    document.getElementById("name").classList.toggle("rotate");
    document.getElementById("name-dropdown").classList.toggle("none");
});
document.querySelector(".title-type").addEventListener("click", function () {
    this.classList.toggle("active-title");
    document.getElementById("type").classList.toggle("rotate");
    document.getElementById("type-dropdown").classList.toggle("none");
});
document.querySelector(".title-much").addEventListener("click", function () {
    this.classList.toggle("active-title");
    document.getElementById("much").classList.toggle("rotate");
    document.getElementById("much-dropdown").classList.toggle("none");
});
document.querySelector(".title-grind").addEventListener("click", function () {
    this.classList.toggle("active-title");
    document.getElementById("grind").classList.toggle("rotate");
    document.getElementById("grind-dropdown").classList.toggle("none");
});
document.querySelector(".title-often").addEventListener("click", function () {
    this.classList.toggle("active-title");
    document.getElementById("often").classList.toggle("rotate");
    document.getElementById("often-dropdown").classList.toggle("none");
});

// order-product-button***********************

// for (let i = 0; i < 20; i++) {
//     document.getElementByClassNameAll(".order-product-button").childNodes[i].onclick = function () {
//         document.getElementByClassNameAll(".order-product-button").childNodes[i].classList.toggle("active-pro");
//     }
// }