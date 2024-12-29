var text = prompt("Enter the statment");

  var chr = prompt("Enter charcter to search");
  
function search(text, chr) {
    var index = [];

    for (var i = 0; i < text.length; i++) {
      if (text[i] == chr) {
        index.push(i);
      }
    }
    document.writeln("Your Statment is : "+text);
    document.writeln("<br>"+index);
  }
  
  

  search(text, chr);