let btn=document.querySelector("button");

btn.addEventListener("click", ()=>{
    let h1=document.querySelector("h1");
    h1.innerHTML=generatColor();
    let div = document.querySelector("div");
    div.style.backgroundColor=generatColor();
});

generatColor=()=>{
    let red= Math.floor(Math.random()*255);
    let blue= Math.floor(Math.random()*255);
    let green= Math.floor(Math.random()*255);
    return (`rgb(${red},${blue},${green})`);
};