function square(num) {  //call back
    return num * num;
}

function processArray(arr, fun) {     //higher order
    for (var i = 0; i < arr.length; i++) {
        console.log(fun(arr[i]));
    }
}
var numbers = [1, 2, 3, 4, 5, 6];
console.log(processArray(numbers, square));



