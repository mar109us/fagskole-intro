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
   let count = 0;
   let wordStart = null;
   let wordEnd = null;
   let longestWord = null;
   for (i = 0; i < data.length; i++) {
      if (data.charCodeAt(i) === 32) {
         count++;
      }
      if (data.charCodeAt(i) !== 32 && wordStart === null) {
         wordStart = i;
         console.log(wordStart);
      }
      if (data.charCodeAt(i) === 32 && wordEnd === null) {
         wordEnd = i;
         console.log(wordEnd);
      }
      if (wordEnd - wordStart < longestWord) {
         longestWord = wordEnd - wordStart;
         console.log("asd", longestWord);
         wordStart = null;
         wordEnd = null;
      }
   }
   return longestWord;
}
