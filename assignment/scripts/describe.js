// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// the console.log will reflect the response/comment as 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We have created a variable called 'name' and set the string as Dane.
// The condition for name being listed as 'Mary' has been set to only accept an exact match.
// If the name is an exact match (will only accept Mary, no conversions) the console.log response will be Hi, Mary!
// If the name is listed as anything other than Mary (like 'Dane' as we set previously) the console.log response will be How do you do? and what will reflect online as this message due to the name not being listed as Mary.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We have created a variable called 'secret' & another variable called 'code' which equals 123.
// We have set a condition where if the code is exactly the same as 123 the variable secret will reflect as the phrase super.
// code has not been updated to the amount of 246 (because 123 x 2 = 246)
// We have set a second condition where if the code number is greater than 250 the variable secrert will reflect as the phrase duper.
// We have console.logged the variable secret so that it show in our console

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We have created a variable called isStudent and made it a boolean, listing that this variable is currently true.
// We have created a variable called age and listed the current number as 34.
// We have created another variable called zip and listed that number as 55407.
// We have set a condition where if the variable isStudent is true AND your zip code is greater than 80000, the console log will list the phrase 'You're a student on the West Coast!' (Both conditions must apply for this)
// We have set another condition where if the variable isStudent is false OR your age is less than 30, the console log will list the phrase 'What are your hobbies?' (only one of the 2 conditions needs to be met.)
// We have set another condition where if variable isStudent is true the console log phrase will reflect as 'Welcome to Prime!'
// We have set the final condition where if variable isStudent is false the console log phrase will reflect as 'How about the weather?' (I don't believe this condition will ever show due to the condition on line 91 always applying before this option... right?)

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
* colorTwo = 'purple'; <-- needs to be added within curly brackets 

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
* const time needs to be changed to  --> let time = 4;
* const needs to be removed as we want time to be a variable not a constant
* || brackets need to be changed to && as both conditions need to be true not only one

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
* {console.log('enter');}
else {console.log('no entry');}
*console.log phrases need to be switched as if condition is met the phrase reflects as 'no entry' instead of enter, and else currently reflects as 'enter', which isn't giving the desired message haha