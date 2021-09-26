var hamburger = document.querySelector(".hamburger")
var items = document.querySelector("#nav-items");

hamburger.addEventListener('click', ()=>{
    items.classList.toggle("active");
    hamburger.classList.toggle("active");
})