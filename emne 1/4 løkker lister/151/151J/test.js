function findLongestWord(data) {
   let startWord = null;
   let countCharacters = null;
   let currentWordLength = null;
   let longestWordLength = null;

   for (let i = 0; i < data.length; i++) {
      countCharacters++;
      if (findWordStart(data, i, startWord)) {
         startWord = i;
      }
      if (findStringEnd(data, i)) {
         currentWordLength = countCharacters;
         startWord = i;
         countCharacters = null;
      }
      if (findWordEnd(data, i, countCharacters)) {
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
function findWordStart(data, i, startWord) {
   if (data.charCodeAt(i) !== 32 && startWord === null) {
      return true;
   }
}
function findStringEnd(data, i) {
   if (i === data.length - 1) {
      return true;
   }
}
function findWordEnd(data, i, countCharacters) {
   if (data.charCodeAt(i) === 32 && countCharacters !== null) {
      return true;
   }
}
