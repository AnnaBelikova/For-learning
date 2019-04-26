let myArray=range(10, 1, 2);

function range(start, end, n){
    let a=[];
   if(start < end){
        for(let i=start; i<=end ;i += n){
            a.push(i);
        }
   }
   else{
        for(let i=start; i>=end; i -= n){
            a.push(i);
        }
   }
   return (a);
}


let sumOfElements = myArray.reduce(function (sum, current) {
        return sum + current;
    });


console.log(range(10, 1, 2));
console.log(sumOfElements);