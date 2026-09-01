function writeHash() {
   document.getElementById("output").innerText += "#";
}

function writeSpace() {
   document.getElementById("output").innerText += "\u00A0";
}

function writeLineBreak() {
   document.getElementById("output").innerText += "\n";
}
let maxRows = 8;
let maxHash = 0;
let maxCharPerRow = 7

let currentRow = 0;

function printOut() {
   for (i = 0; i <= maxRows; i++) {
      console.log(currentRow);
      printRow();
      writeLineBreak();
   }
}
printOut();

function printRow() {
   if (currentRow < 4) {
      maxHash += 2;
      for (let i = 0; i <= (maxCharPerRow - maxHash); i++) {
         writeSpace();
      }
      for (let i = 0; i < maxHash; i++) {
         writeHash();
      }
      currentRow++;
   } else {
      for (let i = 0; i < (maxCharPerRow - maxHash); i++) {
         writeSpace();
      }
      for (let i = 0; i < maxHash; i++) {
         writeHash();
      }
      maxHash -= 2;
      currentRow++;
   }
}
