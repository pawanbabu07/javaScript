//let api="https://dog.ceo/api/breeds/image/random";
let btn=document.querySelector("button");
let btn2=document.querySelector("#btn2");
async function getFact() {
    try{
        let res =await axios.get("https://catfact.ninja/fact");
        return re=res.data.fact;
    }catch(e){
        console.log("Error: ",e);
    }
}
btn.addEventListener('click',async function(){
    let res=await getFact();
    document.querySelector("div").innerHTML=res;
    
});

async function getPic() {
    try{
        let res=await axios.get("https://dog.ceo/api/breeds/image/random");
        return res.data.message;
    }catch(e){
        console.log("Error: ",e);
    }
}
btn2.addEventListener('click',async ()=>{
    let link = await getPic();
    let img = document.querySelector("#image");
    img.setAttribute("src", link);
})
