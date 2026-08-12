let light = document.getElementById('light')

let count = 1

light.addEventListener("click",() => {
   console.log(count)
   if (count === 5) {
      count = 1
   }
   else {
      count++
   }
})