var x = document.querySelectorAll(".about-points");

function visible(i){
    x[i].classList.remove("invisible");
}
var delay = 200;
for(let i=0; i<3; i++){
    setTimeout(() => {
        visible(i)
    }, delay+=delay);
}
