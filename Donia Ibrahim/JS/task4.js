function sorting(){

    var numbers = [];

    for(i=0;i<5;i++){
        numbers.push(Number(prompt("Enter a number")));
    }

    document.writeln("You Have Entered The Values : " + numbers .join(","))

    numbers.sort(function(a, b)
    {return a - b});

    document.writeln("<br>Your values after being sorted ascending: " + numbers .join(","))

    numbers.sort(function(a, b)
    {return b - a});

    document.writeln("<br>Your values after being sorted descending: " + numbers .join(","))

}

sorting();