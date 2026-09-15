// function add(a, b) {
//   return a + b;
// }

// Create a file named main.js with the function function fixText(txt).

// Trim all leading and trailing whitespace from the input.

// Format the string so the first letter is uppercase and all subsequent letters are lowercase.

// Test-first requirement: Write QUnit tests for the new lowercase rule before updating your function to pass them.

function fixText(text) {
   let modifyText = text;
   while (modifyText[0] === " ") {
      console.log("mew");
      modifyText = modifyText.slice(1);
      console.log(modifyText);
   }
   
   return modifyText;
}
fixText("12");
