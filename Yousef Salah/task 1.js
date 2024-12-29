/**Task 1 */
var name = prompt ("Enter your name")
for (var i=1;i<7;i++){
    document.writeln("<h" + i + ">" + name + "</h" + i + ">");
}

/** Task 2 */
// var x=null;
// var sum = null ;
// while(x!=0 && sum<100){
//     x= Number(prompt("Enter a number"));
//     sum = sum + x;
// }
// document.writeln(sum);

// /** Task 3 */

// var x= null ;

//     x = prompt("Enter the number");
//     if(x%3==0 && x%5==0){
//         document.writeln("FIZZ BUZZ");
//     }
//     else if(x%3==0){
//         document.writeln("FIZZ");
//     }
//     else if(x%5==0){
//         document.writeln("BUZZ");
//     }
//     else{
//         document.writeln("NONE");
//     }

/** Task 4 */


// document.writeln("Who am I game");
// var check = 0;
// check = confirm("Are you a fly");
// if(check){
//     document.writeln("<br/>"+"Are you a fly :YES")
//     check=0;
//     check= confirm("Are you wild");
//     if(check){
//         document.writeln("<br/>"+"Are you wild :YES");
//         document.writeln("<br/>"+"You are an eagle");
//         document.writeln("<br/>"+"<img src= "+"./Eagle.jpg"+">");
//     }
//     else{
//         document.writeln("<br/>"+"Are you wild :NO");
//         document.writeln("<br/>"+"You are a Parrot");
//         document.writeln("<br/>"+"<img src= "+"./Parrot.jpg"+">");
//         document.writeln("<br/>"+"You are a Pingun");
//         document.writeln("<br/>"+"<img src= "+"./Pingun.jpg"+">");
//     }
// }
// else{
//     document.writeln("<br/>"+"Are you a fly :NO")
//     check=0;
//     check= confirm("Do you live Under sea");
//     if(check){
//         document.writeln("<br/>"+"Do you live Under sea :NO")
//         check=0;
//         check= confirm("Are you wild");
//         if(check){
//             document.writeln("<br/>"+"Are you wild :YES");
//             document.writeln("<br/>"+"You are an Shark");
//             document.writeln("<br/>"+"<img src= "+"./Shark.jpg"+">");
//         }
//         else{
//             document.writeln("<br/>"+"Are you wild :NO");
//             document.writeln("<br/>"+"You are a Dolphine");
//             document.writeln("<br/>"+"<img src= "+"./Dolphine.jpg"+">");
//         }
//     }
//     else{
//         document.writeln("<br/>"+"Do you live Under sea :NO")
//         check=0;
//         check= confirm("Are you wild");
//         if(check){
//             document.writeln("<br/>"+"Are you wild :YES");
//             document.writeln("<br/>"+"You are an Lion");
//             document.writeln("<br/>"+"<img src= "+"./Lion.jpg"+">");
//         }
//         else{
//             document.writeln("<br/>"+"Are you wild :NO");
//             document.writeln("<br/>"+"You are a Cat");
//             document.writeln("<br/>"+"<img src= "+"./Cat.jpg"+">");
//         }
//     }
// }

/** Task 5 */



// var name = prompt("Enter your name");
// while (!/^[a-z||A-Z/s]+$/.test(name)) {
//     name = prompt("Invalid name");
// }

// var phone = Number (prompt("Enter number"));
//  while (!/^\d{8}$/.test(phone)) {
//    phone = prompt("Invalid number");
// }

// var mobile = prompt("Enter your mobile number ");
// while (!/^012|010|011\d{8}$/.test(mobile)){
//     mobile = prompt("Invalid mobile number");
// }


// var email = prompt("Enter your email:");
// while (!/^[a-z||A-Z][\w]+@[0-9]{3}\.com|eg|gov|edu$/.test(email)){
//     email = prompt("Invalid email");
// }


// var colors = prompt("Choose a color: red, green, or blue");
// while (!["red", "green", "blue"]) {
//     colors = prompt("Invalid color");
// }


// const today = new Date();
// document.write("<h1>entering users info</h1>");


document.write("<h2 style='color: " + colors + "'>Welcome dear guest " + name + "</h2>");
document.write("<h2 style='color: " + colors + "'>Your telephone number is: " + phone + "</h2>");
document.write("<h2 style='color: " + colors + "'>Your mobile number is: " + mobile + "</h2>");
document.write("<h2 style='color: " + colors + "'>Your email address is: " + email + "</h2>");
document.write("<h2 style='color: " + colors + "'>Today's date is: " + today.toDateString() + "</h2>");



