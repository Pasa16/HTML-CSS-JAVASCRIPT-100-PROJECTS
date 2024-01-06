const button = document.querySelector(".btn");
let hex = document.querySelector(".hex");

function randomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#"
    for(let i = 0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

button.addEventListener("click", ()=>{
    document.body.style.background = randomColor();
    hex.innerHTML=randomColor();
})