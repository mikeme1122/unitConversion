const inputField = document.getElementById("input-field")
const lengthResult = document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")

function giveResult() {
    let convMeter = (inputField.value * 3.281).toFixed(3)
    let convFeet = (inputField.value / 3.281).toFixed(3)
    lengthResult.innerHTML = `${inputField.value} meters = ${convMeter} feet | ${inputField.value} feets = ${convFeet} meetrs`
    giveResultVol()
    giveResultMass()
}

function giveResultVol() {
    let convLit = (inputField.value * 0.264).toFixed(3)
    let convGal = (inputField.value / 0.264).toFixed(3)
    volumeResult.innerHTML = `${inputField.value} meters = ${convLit} gallons | ${inputField.value} gallon = ${convGal} liters`
} 

function giveResultMass() {
    let convKil = (inputField.value * 2.204).toFixed(3)
    let convPound = (inputField.value / 2.204).toFixed(3)
    massResult.innerHTML = `${inputField.value} kilograms = ${convKil} pounds | ${inputField.value} gallon = ${convPound} kilograms`
} 


// function convertMetersToFeet (val) {
//     return val * 3.281
//     }

//     function convertLength(val, type) {
//         if (type === "meters_to_feet") {
//          return val * 3.281
//         } else if ()
//         }

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

