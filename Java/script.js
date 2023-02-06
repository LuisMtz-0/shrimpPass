// Assignment code here
let alertEl = document.getElementById("alert");
// added the character that my for function will look through to grab 1 character per iteration of its cycle
let characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Defined the length for my password
let len = document.getElementById("pasLen");
//let len = 0;
// Get references to the #generate element
// selects the button by its id
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // making password blank so each time function is run a new value is added and last one gets clear
  let password = "";
  // defining the id for where my text will be added to my html file using an id selector
  let passwordText = document.querySelector("#password");
  // running a for loop that will cycle until i equals var len.value
  for (let i = 0; i < len.value; i++) {
    // defined a random to equal to a random number what will look through the characters string and choose one of all  of them
    let random = Math.floor(Math.random() * characters.length);
    // console.log to see if it correctly giving a random number each time 
    password += characters.substring(random, random + 1);
    let newPassword = password;
    passwordText.value = newPassword;
// This code was my trying to create a new element to add the password to and have them stored.
// The problem with this was the is was going to cycle when adding it making the final result having to add each character of the password one by one.
    // let newEl = document.createElement("p");
    // let textEl = document.createTextNode(newPassword);

    // let prePass = newEl.appendChild(textEl);  
    // alertEl.appendChild(prePass).value
    // console.log(newPassword);

    // Got it to work by creating an if function that will only let the program run when the whole password is complete
   if (newPassword.length == len.value) {
    let newEl = document.createElement("p");
    let textEl = document.createTextNode(newPassword);

    let prePass = newEl.appendChild(textEl);  
    alertEl.appendChild(prePass).value
    console.log(newPassword);
   }
  }
   celebration();
   
}

function celebration(){
   let newEl = document.createElement("p");
    let textEl = document.createTextNode(" Try again!!  ");

    let prePass = newEl.appendChild(textEl);  
    alertEl.appendChild(prePass);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
