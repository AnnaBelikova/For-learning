let arr=[];
function binarySearch(el, arr, arrStart=0, arrEnd=arr.length){
    let temp=0;
    temp=Math.floor((arrStart+arrEnd)/2);
    if (el===arr[temp]){
        return temp;
    }else if(el<arr[temp]){
        if(arrStart==(arrEnd-1)){
        temp=undefined;
        return temp;
        }else{
        arrEnd=temp;
        return binarySearch(el, arr, arrStart, arrEnd );
        }
    }else if(el>arr[temp]){
        if(arrStart==(arrEnd-1)){
        temp=undefined;
        return temp;
        }else{
        arrStart=temp;
        return binarySearch(el, arr, arrStart, arrEnd );
        }
    }else{
        temp=undefined;
        return temp;
    }
}
//TEST Return the index of the element.
let arrayTest=[1,2,4,5,6,10,10]
alert('TEST № 1 : '+binarySearch(5,arrayTest));
//TEST 2. Element is undefined.
 arrayTest=[1,2,4,6,10,10]
alert('TEST № 2 : '+binarySearch(8,arrayTest));

//TEST 3. The order of the elements.
arrayTest=[1,2,3,4]
alert('TEST № 3 : '+binarySearch(1,arrayTest));
alert('TEST № 4 : '+binarySearch(2,arrayTest));
alert('TEST № 5 : '+binarySearch(3,arrayTest));
alert('TEST № 6 : '+binarySearch(4,arrayTest));

//TEST 4. Array is not sorted.
arrayTest=[1,2,4,6,10,10,9]
alert('TEST № 7 : '+binarySearch(8,arrayTest));
