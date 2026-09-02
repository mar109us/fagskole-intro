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
         <li>Longest: ${findLongestWord(data)}</li>
         <li>Vocals: ${findVocalWord(data)}</li>
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
   for (let i = 0; i < data.length; i++) {
      if (data.charCodeAt(i) === 32) {
         count++;
      }
   }
   let lastCharacterProbablyNotSpace = 1;
   return count + lastCharacterProbablyNotSpace;
}

function findLongestWord(data) {
   let startWord = null;
   let countCharacters = null;
   let currentWordLength = null;
   let longestWordLength = null;

   for (let i = 0; i < data.length; i++) {
      countCharacters++;
      if (data.charCodeAt(i) !== 32 && startWord === null) {
         startWord = i;
      }
      if (i === data.length - 1) {
         currentWordLength = countCharacters;
         startWord = i;
         countCharacters = null;
      }
      if (data.charCodeAt(i) === 32 && countCharacters !== null) {
         currentWordLength = countCharacters - 1;
         startWord = i;
         countCharacters = null;
      }
      if (currentWordLength > longestWordLength) {
         longestWordLength = currentWordLength;
         currentWordLength = null;
      }
   }
   if (longestWordLength === null) {
      longestWordLength = data.length;
   }
   return longestWordLength;
}

function findVocalWord(data) {
   let vocal = ["a", "e", "i", "o", "u", "y"];
   let vocalCount = 0;

   for (let i = 0; i < data.length; i++) {
      if (vocal.includes(data.charAt(i))) {
         vocalCount++;
      }
   }
   return vocalCount;
}
