// const bird = document.querySelector(".bird");
// let offsetleft = 0;
// bird.addEventListener("click", function (){
//         offsetleft += 20;
// //zorgt ervoor dat de vird 20 pixels naar links
//         bird.style.left = offsetleft+ "px";
// });

const bird = document.querySelector(".bird");
let count = 0;
window.addEventListener("keydown", function (e){
    if(e.key == "ArrowRight"){
        count += 20;
        bird.style.left = count + "px";
        bird.src = "img/b-right.svg";
    }
    if(e.key == "ArrowLeft"){
        count -= 20;
        bird.style.left = count + "px";
        bird.src = "img/b-left.svg";
    }
    if(e.key == "ArrowUp"){
        count += 20;
        bird.style.bottom = count + "px";
        bird.src = "img/b-up.svg";
    }
    if(e.key == "ArrowDown"){
        count -= 20;
        bird.style.bottom = count + "px";
        bird.src = "img/b-down.svg";
    }
});