function string() {
  var text = prompt("Enter Your String");

  var count = 0;

  for (i = 0; i < text.length; i++) {
    if (text[i] == "e") count++;
  }
  document.writeln(count);
}

string();
