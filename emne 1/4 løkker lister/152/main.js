/* 
152 A  
funksjon lager array
samme funksjon returnerer en liste 
med hvert sjuende tall fra 100 til 1000, 
100, 107, 114 osv.*/

// const app = document.getElementById("app");

// updateView();
// function updateView() {
//    app.innerHTML += everySeven();
// }

// function everySeven() {
//    let numbersArray = [];
//    let numbers = "";
//    let min = 100;
//    let max = 1000;
//    let step = 7

//    for (let i = min; i <= max; i += step) {
//       numbersArray.push(i);
//    }

//    for (let i of numbersArray) {
//       numbers += `${i} `;
//    }
//    return numbers;
// }

/* 
152 B  
Lag en funksjon som tar en liste av tall som parameter 
funksjonen returnerer summen av tallene. */


const app = document.getElementById("app");
const numbers = [1, 2, 135, 3, 55555, 35]


updateView();
function updateView() {
   app.innerHTML += combineValue(numbers);
}

function combineValue(numbers) {
   let sum = null
   for (let i of numbers) {
      sum += i
   }
   return sum
}