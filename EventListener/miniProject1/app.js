let imp= document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");


btn.addEventListener("click",()=>{
    //to creat new item in html
    let item = document.createElement("li");
    item.innerHTML=imp.value;
    let delbtn = document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");
    item.appendChild(delbtn);

   
    ul.appendChild(item);
    imp.value="";
    
});

// let delbtns = document.querySelectorAll(".delete");
// for(delBtn of delbtns){
//     delBtn.addEventListener("click",function(){
//         this.parentElement.remove();
//     });
// }


ul.addEventListener("click",function (event){
    if(event.target.nodeName == "BUTTON"){
        event.target.parentElement.remove();
    }
})