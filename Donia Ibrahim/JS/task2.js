function plindrom(){
    var text= prompt("Enter Your Text To Test");
var sensetive=0;
sensetive= confirm("Do You Want Considring Case Of The Text");

    var casesenitive = text.split("").reverse().join("");

    if(sensetive){
        if(text == casesenitive)
            document.writeln("Text Is Plindrom");
        else
            document.writeln("Text Is NOT Plindrom");
    }

    else {
        if (text.toLowerCase() == casesenitive.toLowerCase())
            document.writeln("Text Is Plindrom");
        else
            document.writeln("Text Is NOT Plindrom");
    }
}

plindrom();





