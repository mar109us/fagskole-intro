containerNumber = document.getElementById("container-number")

console.log(containerNumber)

function show1() {
    containerNumber.innerHTML = `
        <h1>1</h1>
        <button onclick="show2()">Øke med én</button>
        <button onclick="show2()">Doble</button>
    `;
}
show1()