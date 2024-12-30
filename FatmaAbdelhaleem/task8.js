function processArray(arr,func){
    var result=[];
    for(i=0;i<arr.length;i++){
         result.push(func(arr[i]));
    }
    return result;
    
}

document.write(processArray([1,2,3,4,5],(a)=>a*a));
