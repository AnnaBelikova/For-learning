let result='';
for (let i=1; i<101; i++){
    result='';
    /*if (i % 3 === 0 & i % 5 != 0) {
        console.log('Fizz');
    }
    else if(i % 3 != 0 & i % 5 === 0){
        console.log('Buzz');
    }
    else if (i % 3 === 0 & i % 5 === 0){
        console.log('FizzBuzz');
    }
   else{
        console.log(i);
   }*/
  /* if(i % 5 === 0){
       if (i % 3 === 0){
           console.log('FizzBuzz');
       }
       else {
        console.log('Buzz');
       }
   }
   else {
       if (i % 3 === 0) {
           console.log('Fizz');
       }
       else {
            console.log(i);
       }
   }*/
   if(i % 3 === 0){
        result += 'Fizz';
   }
    if(i % 5 === 0){
        result += 'Buzz';
   }
   if (result===''){
       result = i;
   }
   console.log(result);

}

