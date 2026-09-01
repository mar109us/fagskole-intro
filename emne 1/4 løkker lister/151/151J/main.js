// 151J
// Les input
// Tell antall ord
// Finn det lengste ordet
// Finn ord med flest vokaler
const code = " ".charCodeAt(0); // 32
updateView();
function updateView(data) {
   if (data) {
      document.getElementById("output").innerHTML += `<h1>${data}</h1>`;
      for (i = 0; i <)
      document.getElementById("output").innerHTML += `<h1>spaces ${data.String.fromCharCode(32)}</h1>`;
   } else {
      initView();
   }
}

function initView() {
   return (document.getElementById("output").innerHTML = `
   <button onclick="initView()">reset</button>
   <input type="text" onchange="updateView(this.value)">
   `);
}
