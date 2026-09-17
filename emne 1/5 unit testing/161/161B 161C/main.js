//skriv test først
//test sjekker om epost
//skriv så funksjon som sjekker om @ er inkludert

function checkEmail(emailToCheck) {
   let checkFormat = checkSpecialCharacters(emailToCheck);
   // checkFormat = checkFormat.toString();
   console.log(checkFormat);
   if (checkFormat.includes(".@.") || checkFormat.includes(".@") || checkFormat.includes("@.")) return checkFormat;
   else if (emailToCheck.includes("@") || emailToCheck.includes(".")) return true;
   else return false;
}
checkEmail("as.d@asdcom");

function checkSpecialCharacters(emailToCheck) {
   let temp = "";
   for (let i of emailToCheck) {
      if (i === "." && temp === "") temp += i;
      if (i === "@" && temp === "") temp += i;
      if (i === "@" && temp === ".") temp += i;
      if (i === "." && temp === ".@") temp += i;
      if (i === "." && temp === "@") temp += i;
   }
   console.log(emailToCheck);
   console.log(temp);
   if (temp !== "") return temp;
   else return "";
}
