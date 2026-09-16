// Create a file named main.js with the function function fixText(txt).

// Trim all leading and trailing whitespace from the input.

// Format the string so the first letter is uppercase and all subsequent letters are lowercase.

// Test-first requirement: Write QUnit tests for the new lowercase rule before updating your function to pass them.

function fixText(text) {
   if (text === undefined || text === null || onlySpace(text)) {
      return "No text received";
   }
   let modifyText = text.toString();
   modifyText = removeSpaceFromStart(modifyText);
   modifyText = removeSpaceFromEnd(modifyText);
   modifyText = setToLowercase(modifyText);
   modifyText = capitalizeFirstLetter(modifyText);
   return modifyText;
}
fixText("  1  ");

function onlySpace(text) {
   for (let i of text) {
      if (i !== " ") {
         return false;
      }
   }
   return true;
}

function removeSpaceFromStart(text) {
   while (text[0] === " ") {
      text = text.slice(1);
   }
   return text;
}

function removeSpaceFromEnd(text) {
   let lastIndex = text.length - 1;
   while (text[lastIndex] === " ") {
      text = text.slice(0, lastIndex);
      lastIndex = text.length - 1;
   }
   return text;
}

function setToLowercase(text) {
   text = text.toLowerCase();
   return text;
}

function capitalizeFirstLetter(text) {
   text = text[0].toUpperCase() + text.slice(1);
   return text;
}
