// function add(a, b) {
//   return a + b;
// }

// Create a file named main.js with the function function fixText(txt).

// Trim all leading and trailing whitespace from the input.

// Format the string so the first letter is uppercase and all subsequent letters are lowercase.

// Test-first requirement: Write QUnit tests for the new lowercase rule before updating your function to pass them.

function fixText(text) {
   let modifyText = text.toString()
   modifyText = removeSpaceFromStart(modifyText);
   modifyText = removeSpaceFromEnd(modifyText);
   modifyText = setToLowercase(modifyText)
   modifyText = capitalizeFirstLetter(modifyText)

   console.log(modifyText);
   return modifyText;
}
fixText("     teRje      ");

function removeSpaceFromStart(text) {
   console.log("REMOVE SPACE FROM START");
   console.log("before:", text.replaceAll(" ", "(space)"));
   while (text[0] === " ") {
      text = text.slice(1);
   }
   console.log("after:", text);
   return text;
}

function removeSpaceFromEnd(text) {
   let lastIndex = text.length - 1;
   console.log("REMOVE SPACE FROM END");
   console.log("before:", text.replaceAll(" ", "(space)"));
   while (text[lastIndex] === " ") {
      text = text.slice(0, lastIndex);
      lastIndex = text.length - 1
   }
   console.log("after:", text.replaceAll(" ", "(space)"));
   return text;
}

function setToLowercase(text) {
   text = text.toLowerCase()
   return text
}

function capitalizeFirstLetter(text){
   text = text[0].toUpperCase() + text.slice(1)
   return text
}

