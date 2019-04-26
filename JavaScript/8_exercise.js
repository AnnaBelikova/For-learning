function deepEqual(a,b){
    let result=true;
    if(typeof(a)!='object' && typeof(b)!='object'){
        result = ( a === b ) ? true : false;
    }
    
    else if(null!=undefined && a === null && b === null ){
        result = true;
    }

    else if (a===null && b===undefined || a===undefined && b===null){
        result = false;
    }
    
    else if(a == null && b!=null || b == null && a!=null){
        result=false;
    }
    else if(typeof(a)=='object' && typeof(b)=='object'){
        if(Object.keys(a).length != Object.keys(b).length){
            result=false;
        }
        else{
            for(let prop in a ){
                if(!deepEqual(a[prop],b[prop])) {
                    result = false;
                    break;
                }
                result=true;
            }
        }
    }
    return result;
}



/*let a= new Object();
a.name='Derek';
a.age=67;
a.education='elementary';
let b= new Object();
b.name='Derek';
b.age=67;
b.education='elementary';*/
let a = null;
let b = undefined;

console.log(deepEqual(a,b));