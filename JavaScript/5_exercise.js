function range(start,end){
    let a=[];
    if(start>end){
        let temp=start;
        start=end;
        end=temp;
    }
    for(let i=start; i<=end ;i++){
       a.push(i);
    }
    return (a);
}
function sum(a){
    let result=0;
    for(let j=0;j<a.length;j++){
        result=result+a[j];
    }
    return (result);
}
let myArray=range(1,10);
console.log(range(1,10));
console.log(sum(myArray));