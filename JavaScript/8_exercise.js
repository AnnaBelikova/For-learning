function deepEqual(a,b){
    let result=true;
    if(typeof(a)!='object' && typeof(b)!='object'){
        if (a===b){
            result=true;
        }
        else{
            result=false;
        }
    }
    else if(a==null && b==null){
        result=true;
    }
    else if(a == null && b!=null || b == null && a!=null){
        result=false;
    }
    else if(typeof(a)=='object' && typeof(b)=='object'){
        if(Object.keys(a).length != Object.keys(b).length){
            result=false;
        }
        else{
            let temp=true;
            for(let prop in a ){
                temp =b.hasOwnProperty(prop) && temp;
                if(temp){
                    temp=temp && (deepEqual(a[prop],b[prop]));
                }
            }
            result=temp;
        }
    }
    return result;
}



let a= new Object();
a.name='Derek';
a.age=67;
a.education='elementary';
let b= new Object();
b.name='Derek';
b.age=68;
b.education='elementary';

console.log(deepEqual(a,b));