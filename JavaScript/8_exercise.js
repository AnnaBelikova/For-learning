function deepEqual(a,b){
    if(typeof(a)!='object' && typeof(b)!='object'){
        /*result = ( a === b ) ? true : false;*/
        if(a!=b){
            return false;
        }
    }
    else if(a === null && b!=null || b === null && a!=null){
        return false;
    }
    else if (a===null && b===undefined || a===undefined && b===null){
        return false;
    }
    else if(typeof(a)==='object' && typeof(b)==='object' && a!=null && b!=null){
        if(Object.keys(a).length != Object.keys(b).length){
            return false;
        }
        else{
            for(let prop in a ){
                if(!deepEqual(a[prop],b[prop])) {
                    return false;
                }
            }
        }
    }
    return true;
}



let a= new Object();
a.name='Derek';
a.age=67;
a.education='elementary';
let b= new Object();
b.name='Derek';
b.age=64;
b.education='elementary';
/*let a = null;
let b = undefined;*/
/*a=1;
b=1;*/

console.log(deepEqual(a,b));