//   function myFunction() {
//   var txt;
//   var person = prompt("Please enter your name:", "Harry Potter");

//   if (person == null || person == "") {
//     txt = "User cancelled the prompt.";
//   } else {
//     txt = "Hello " + person + "! How are you today?";
//   }
//   document.getElementById("demo").innerHTML = txt;
// } 


function addNumber() {
  var txt = 0;
  var input = prompt("Enter a number!");

  for (let i = 0; i <= input; i++) {
    txt = txt + i;
    console.log(txt);
  }

  document.getElementById("number").innerHTML = txt;
}


function wordPlay() {
  var result = "";
  do {
    if (result ==="") {
      var input = prompt("Do you want to play?"); 
    } else {
      var input = prompt("Do you want to play again?");
    }

    if (input === "yes") {
     var word = prompt("Enter a word.");
     result = result + word +" ";
   }
 } while (input === 'yes');

 console.log(result.trim());
 document.getElementById("problem2answer").innerHTML = result.trim();
}


// true, input=yes, true, word="dog", result=""+"dog"+" "="dog ",true  
// false, input=yes, true, word="cat", result = "dog "+"cat"+" "= "dog cat ", true


function nameGame() {
  var result = "";
  var input = prompt("Would you like to print your name?"); 

  while (input === "yes") {
    if (result !== "") {
      input = prompt("Would you like to print this again?");
      if (input === "yes") {
        result = result + '!';
        
      } 
    } else {
     var word = prompt("Enter your name.");
     result = "Hello. My name is" + " "+ word;
   } 
console.log(result);
document.getElementById("problem3answer").innerHTML = result;
}
}


function foodSuggestion() {
  var result = "";
  var input = prompt("What time of day is it?"); 

    if (input === "morning") {
      result = "Since it is morning, you should be eating breakfast. We suggest eggs and toast.";
    } else if (input === "noon") {
      result = "Since it is noon, you should be eating lunch. We suggest a salad.";
    } else if (input === "evening") {
      result = "Since it is evening, you should be eating dinner. We suggest chicken and rice.";
    } else {
      result = "I'm not sure. Maybe just have a snack?";
  } 
      console.log(result); 
  document.getElementById("problem4answer").innerHTML = result;
} 
    
  
      

// if (stopLight === 'red') {
//   console.log('Stop');
// } else if (stopLight === 'yellow') {
//   console.log('Slow down');
// } else if (stopLight === 'green') {
//   console.log('Go!');
// } else {
//   console.log('Caution, unknown!');
// }
   





 //  while (input === "yes") {
 //    if (result !== "") {
 //      input = prompt("Would you like to print this again?");
 //      if (input = "yes"){
 //        result = result + '!';
 //      }
 //    } else {
 //     var word = prompt("Enter your name.");
 //     result = "Hello. My name is" + word;
 //   } 
 //   console.log(result.trim());
 // }





