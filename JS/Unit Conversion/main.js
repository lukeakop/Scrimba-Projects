const convertButton = document.getElementById("convert-btn")
const input = document.getElementById("number-to-convert")

const lengthElement = document.getElementById("length-el")
const volumeElement = document.getElementById("volume-el")
const massElement = document.getElementById("mass-el")




convertButton.addEventListener("click", function convert() {
    const baseValue = Number(input.value)
    lengthElement.textContent = `${baseValue} meters = ${(baseValue * 3.281).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / 3.281).toFixed(3)} feet`
    
    volumeElement.textContent = `${baseValue} liters = ${(baseValue * 0.264).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / 0.264).toFixed(3)} liters`
    
    massElement.textContent = `${baseValue} kilos = ${(baseValue * 2.204).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / 2.204).toFixed(3)} kilos`
})


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound