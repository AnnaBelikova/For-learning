function reverseArray(a){
    let b=[];
    for(let i=0; i<a.length; i++) {
        b.push (a[a.length-i-1]);
    };
    return (b);
}
function reverseArrayInPlace(a){
    for(let i=0; i<(a.length/2);i++){
        let temp=a[i];
        a[i]=a[a.length-1-i];
        a[a.length-1-i]=temp;
    }
    return(a);
}

let myArray=[1,2,3,4,5];
console.log(reverseArray(myArray));
console.log(reverseArrayInPlace(myArray))