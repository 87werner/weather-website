// console.log ("Inside the JS")

// const btn = document.querySelector(".btn-toggle");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// const currentTheme = localStorage.getItem("theme");
// if (currentTheme == "dark") {
//   document.body.classList.toggle("dark-theme");
// } else if (currentTheme == "light") {
//   document.body.classList.toggle("light-theme");
// }

// btn.addEventListener("click", function () {
//   if (prefersDarkScheme.matches) {
//     document.body.classList.toggle("light-theme");
//     var theme = document.body.classList.contains("light-theme")
//       ? "light"
//       : "dark";
//   } else {
//     document.body.classList.toggle("dark-theme");
//     var theme = document.body.classList.contains("dark-theme")
//       ? "dark"
//       : "light";
//   }
//   localStorage.setItem("theme", theme);
// });







// Display weather section
const tempElement = document.getElementById("tempcelcius")
const temp = document.getElementById("tempcelcius").textContent
 console.log(temp)
 const tempSplit = temp.split("°")
 const myTemp = parseInt(tempSplit[0])
 console.log(myTemp)

 tempElement.addEventListener("mouseover", () => {
   
        let fahrenheit = myTemp * 1.8 + 32
        fahrenheit = Math.floor(fahrenheit);
        tempElement.textContent = `${fahrenheit}°F`
})

tempElement.addEventListener("mouseout", () => {
                let celsius = myTemp 
                celsius = Math.floor(celsius)
                tempElement.textContent =`${celsius}°C`
        
})

