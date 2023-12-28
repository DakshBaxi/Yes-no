const nobtn = document.querySelector(".no");
const main = document.querySelector(".main");
const mainReact = main.getBoundingClientRect();
const nobtnReact = nobtn.getBoundingClientRect();

nobtn.addEventListener("mouseover", ()=>{
    let x = Math.floor(Math.random()*(window.innerWidth - nobtnReact.width))+1;
    let y = Math.floor(Math.random()*(window.innerHeight - nobtnReact.height))+1;
    document.querySelector(".no").style.left = x+"px";
    document.querySelector(".no").style.top = y+"px";
})