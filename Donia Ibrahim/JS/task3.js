function operations(arr){
    var sum = arr[0] ;
    var multi = arr[0] ;
    var dev = arr[0];
    for(var i = 1; i < arr.length; i++){
        sum = sum + arr[i]; 
        multi = multi * arr[i];
        dev = dev / arr[i];
    }
    document.writeln("sum of three values: " + arr[0] + " + " + arr[1] + " + " + arr[2] + " = " + sum);
    document.writeln("<br>Multiply of three values: " + arr[0] + " * " + arr[1] + " * " + arr[2] + " = " + multi);
    document.writeln("<br>Division of three values: " + arr[0] + " / " + arr[1] + " / " + arr[2] + " = " + dev);
}

var arr = [];
for (var i = 0; i < 3; i++){
    arr.push(Number(prompt("Enter a number")));
}

operations(arr);