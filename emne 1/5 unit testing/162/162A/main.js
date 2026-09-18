// model
var numbers = [7, 3, 1, 5, 10];
let chosenBar;
let inputValue;
let editButtonsState = "disabled";

// view
updateView();
function updateView() {
   let svgInnerHtml = "";
   for (let i = 0; i < numbers.length; i++) {
      svgInnerHtml += createBar(numbers[i], i + 1, chosenBar);
   }
   document.getElementById("content").innerHTML = /*HTML*/ `
            <svg id="chart" width="500" viewBox="0 0 80 60">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>${chosenBar ? chosenBar : "ingen"}</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" value="${inputValue}" />
            <button onclick="addBar()">Legg til stolpe</button>
            <button ${editButtonsState} onclick="setNewBarHeight()">Endre valgt stolpe</button><br />
            <button ${editButtonsState} onclick="removeBar()">Fjerne valgt stolpe</button>
        `;
}

function createBar(number, barNo, selected) {
   const width = 7;
   const spacing = 2;
   let x = (barNo - 1) * (width + spacing) + 4;
   let height = number * 5.9;
   let y = 61 - height;
   let color = calcColor(1, 10, barNo);
   let drawStroke = "none";
   if (selected === barNo) {
      drawStroke = "black";
   }
   return `
         <rect
         id="bar"
         class="bar"
         onclick="selectBar(${barNo})"
         width="${width}"
         height="${height}"
         x="${x}"
         y="${y}"
         fill="${color}"
         stroke="${drawStroke}"
         stroke-width="0.3">
         </rect>`;
}

function calcColor(min, max, val) {
   var minHue = 240,
      maxHue = 0;
   var curPercent = (val - min) / (max - min);
   var colString = "hsl(" + (curPercent * (maxHue - minHue) + minHue) + ",100%,50%)";
   return colString;
}

// controller
function selectBar(barNo) {
   chosenBar === barNo ? (chosenBar = undefined) : (chosenBar = barNo);
   toggleEditButtons();
   setInputValue();
   updateView();
}

function setInputValue() {
   inputValue = numbers[chosenBar - 1];
}

function deselectBar() {
   chosenBar = undefined;
   inputValue = undefined;
   toggleEditButtons();
   updateView();
}

function toggleEditButtons() {
   chosenBar === undefined ? (editButtonsState = "disabled") : (editButtonsState = "");
}

function setNewBarHeight() {
   numbers[chosenBar - 1] = inputValue;
   deselectBar();
}

function removeBar() {
   numbers.splice(chosenBar - 1, 1);
   numbers = [...numbers];
   updateView();
}
function addBar() {
   if (inputValue === NaN || inputValue === undefined || inputValue === "" || inputValue < 1 || inputValue > 10) {
      alert(`
            Input: ${inputValue}
            Valid value range:
            1 - 10`);
   } else {
      numbers.push(inputValue);
      numbers = [...numbers];
   }
   deselectBar();
   updateView();
}

window.addEventListener("click", (click) => {
   if (click.target.id !== "bar" && click.target.localName !== "button" && click.target.localName !== "input") {
      deselectBar();
   }
});
