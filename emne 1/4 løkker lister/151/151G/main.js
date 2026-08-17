function writeHash() {
   document.getElementById("output").innerText += "#";
}

function writeSpace() {
   document.getElementById("output").innerText += " ";
}

function writeLineBreak() {
   document.getElementById("output").innerText += "\n";
}

for(index = 0; index<10 ; index++) {
   writeHash()
}
