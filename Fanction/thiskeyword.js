const Student={
    name:'Pawan',
    age:20,
    phy:93,
    eng:93,
    math:90,
    avg(){
        let avg=(this.eng+this.phy+this.math)/3;
        console.log(avg);
    }
}
function avg(){
    let avg=(Student.eng+Student.phy+Student.math)/3;
    console.log(avg);
}