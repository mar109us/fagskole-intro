function writeHash() {
   document.getElementById("output").innerText += "#";
}

function writeSpace() {
   document.getElementById("output").innerText +=  "\u00A0";
}

function writeLineBreak() {
   document.getElementById("output").innerText += "\n";
}
let maxRows = 4;
let maxHash = 8;

let currentRow = 0;
let currentColumn = 0;

function printOut() {
   for (i = 0; i < maxRows; i++) {
      console.log(currentRow);
      printRow();
      writeLineBreak();
   }
}
printOut();

function printRow() {
   for (let i = 0; i < currentRow; i++) {
      writeSpace();
   }
   for (let i = 0; i < maxHash; i++) {
      writeHash();
   }
   for (let i = 0; i < currentRow; i++) {
      writeSpace();
   }
   currentRow++;
   maxHash -= 2;
}
