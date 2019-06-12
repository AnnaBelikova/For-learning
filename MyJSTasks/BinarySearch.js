let arr=[];
function binarySearch(el, arr, arrStart=0, arrEnd=arr.length){
    let temp=0;
    temp=Math.floor((arrStart+arrEnd)/2);
    if (el===arr[temp]){
        return temp;
    }else if(el<arr[temp]){
        arrEnd=temp;
        return binarySearch(el, arr, arrStart, arrEnd );
    }else{
        arrStart=temp;
        return binarySearch(el, arr, arrStart, arrEnd );
    }
}
//TEST
arrayTest=[1,2,4,5,6,10,10]
alert(binarySearch(5,arrayTest));