function writeHash() {
   document.getElementById("output").innerText += "#";
}

function writeSpace() {
   document.getElementById("output").innerText += " ";
}

function writeLineBreak() {
   document.getElementById("output").innerText += "\n";
}
let maxRows = 4;
let maxColumns = 8;

let currentRow = 0;
let currentColumn = 0;

let hash1 = 8;
function printOut() {
   for (index = 0; index < maxRows; index++) {
      printRow();
      writeLineBreak();
   }
}
printOut();

function printRow() {
   for (let index = 0; index < maxColumns; index++) {
      let count = 0;
      if (count === 0) {
         writeHash();
         count++;
      } else {
         for (let count = 0; index < count; index++) {
            writeSpace();
            console.log("mew")
         }
      }
   }
}
