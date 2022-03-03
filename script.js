// Overall Project Goal: Temperature Converter 
// Part 1: convert from Celsius to Fahrenheit
// step 1a: Get a number (via prompt() or input field) 
// step 1b: take the number (num)
// step 1c: parseInt() the number (num)
// stpe 4d: convert to Fahrenheit (by adding 2)
// step 4e: display the converted number 
// -- 
// 


// Part 1: convert from Celsius to Fahrenheit 
// step 1a: Get a number (via prompt() or input field)
// step 1b: take the number (num) 
let num1;
// let num1 = prompt("Pick a number"); 


// console.log(`${num1} degrees Celsius is ${num2} degrees Fahrenheit`); 
let FahrenheitDisplay;


function convertToFahrenheit(){
    num1 = document.getElementById("inputNum1").value;
    // step 1c: parseInt() the number (num)
    // step 1c: parseInt() the number (num)
    // stpe 4d: convert to Fahrenheit (by adding 2)
    let num2 = parseInt(num1) + 32; 
    console.log(num2);
    document.getElementById("inputNum1").value = "";

    FahrenheitDisplay = document.getElementById("demo1").innerHTML = (`°${num1} (degrees) Celsius converts to °${num2} (degrees) Fahrenheit.`);
    console.log(`${num1} degrees Celsius converts to ${num2} degrees Fahrenheit.`);
}   



// testing conditionals
// let numValue = document.getElementById("inputNum1").value;
// function convertToFahrenheit(){
//     if (numValue === "") {
//         // console.log("cannot be empty");
//         console.log("0");
//         document.getElementById("inputNum1").value = "";
//     } else {
//         // console.log("not empty");
//         console.log("1");
//         document.getElementById("inputNum1").value = "";
//     }
// }



let num3; 
let num4; 
// Part 2: Convert from Fahrenheit to Celsius
// Math formula for conversion (0°F − 32) × 5/9 = -17.78°C
// (num3 - 32) * 5/9 = num4 

let CelsiusDisplay;





function convertToCelsius(){
    // step 2a: Get a number (via prompt() or input field)
    num3 = document.getElementById("inputNum3").value;
    // step 2b: parseInt() the number (num3)
    num3 = parseInt(num3);
    // step 2c: convert to C (by subtracting - 32)
    num3 = num3 - 32;
    // step 2d: num3 multiplied by 5/9
    num3 = num3 * 5/9; 
    console.log(num3);
    // document.getElementById("inputNum3").value = "";

    CelsiusDisplay = document.getElementById("CelsiusDisplay").innerHTML = (`°${num3} (degrees) Fahrenheit converts to °${num4} (degrees) Celsius.`);
    console.log(`${num1} degrees Fahrenheit converts to ${num4} degrees Celsius.`);
}  
