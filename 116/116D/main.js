let light = document.getElementById("light");

let redLight = document.getElementById("red-light");
let yellowLight = document.getElementById("yellow-light");
let greenLight = document.getElementById("green-light");

let count = 1;

light.addEventListener("click", () => {
   console.log(count);
   if (count === 5) {
      count = 1;
   } else {
      count++;
   }

   checkState(count);
});

function checkState(currentState) {
   if (currentState === 1) {
      redLight.style.backgroundColor = "red";
      yellowLight.style.backgroundColor = "gray";
      greenLight.style.backgroundColor = "gray";
   }
   if (currentState === 2) {
   }
   if (currentState === 3) {
   }
   if (currentState === 4) {
   }
   if (currentState === 5) {
   }
}
checkState(count)