// let url = "https://catfact.ninja/fact";


async function getFact(){
    try{
        let responce = await axios.get("https://catfact.ninja/fact");
        console.log(responce.data.fact);
    }catch(e){
        console.log("error: ",e);
    }
}

getFact();