let arr=[1,5,8,9,6,7,4,3,2];

let max=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
    //console.log(arr[i]);
}
console.log(max)


let mx=arr.reduce((mx,el)=>{
    if(mx>el){
      // mx=el ;
       return mx;
    }else{
        return el;
    }
});
console.log(mx);