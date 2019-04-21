function isEven(n){
    let result=true;
    if(n<0){
        n=-n;
    }
    if(n==0){
        result=true;
    }
    else if(n==1){
        result=false;
    }
    else{
        result=isEven(n-2);
    }
    return (result);
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

