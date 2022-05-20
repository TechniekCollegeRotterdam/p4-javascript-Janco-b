const bird = document.querySelector(".bird");
let offsetleft = 0;
bird.addEventListener("click", function (){
        offsetleft += 20;
//zorgt ervoor dat de vird 20 pixels naar links gaat
        bird.style.left = offsetleft+ "px";
});