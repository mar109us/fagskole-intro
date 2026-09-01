// 151J
// Les input
// Tell antall ord
// Finn det lengste ordet
// Finn ord med flest vokaler

const code = " ".charCodeAt(0); // 32

updateView();
function updateView(data) {
   initView();
   if (data) {
      document.getElementById("output").innerHTML += `<h1>${data}</h1>`;

      document.getElementById("output").innerHTML += `
      <ul>
         <li>Words: ${countSpaces(data)}</li>
         <li>Longest word: ${findLongestWord(data)}</li>
      <ul>
      `;
   }
}

function initView() {
   return (document.getElementById("output").innerHTML = `
   <input type="text" onchange="updateView(this.value)">
   <button type="submit" onclick="initView()">reset</button>
   `);
}

function countSpaces(data) {
   let count = 0;
   for (i = 0; i < data.length; i++) {
      if (data.charCodeAt(i) === 32) {
         count++;
      }
   }
   let lastCharacterProbablyNotSpace = 1;
   return count + lastCharacterProbablyNotSpace;
}

function findLongestWord(data) {
   let wordStart = null;
   let wordCount = null;
   let currentWord = null;
   let longestWord = null;
   for (i = 0; i < data.length; i++) {
      wordCount++;

      if (data.charCodeAt(i) !== 32 && wordStart === null) {
         wordStart = i;
      }
      if (i === data.length - 1) {
         currentWord = wordCount;

         wordStart = i;
         wordCount = null;
      }

      if (data.charCodeAt(i) === 32 && wordCount !== null) {
         currentWord = wordCount - 1;

         wordStart = i;
         wordCount = null;
      }
      if (currentWord > longestWord) {
         longestWord = currentWord;
         currentWord = null;

         console.log("mew2");
      }
   }
   if (longestWord === null) {
      longestWord = data.length;
   }
   return longestWord;
}
