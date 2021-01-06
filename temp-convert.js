const radioF = document.getElementById('f');
const radioC = document.getElementById('c');
const num = document.getElementById('num');
const calc = document.getElementById('calc');
const output = document.getElementById('output')

calc.addEventListener('click', () => {

    if (radioF.checked) {
        FtoC(num.value);
    }

    if (radioC.checked) {
       CtoF(num.value);
    }

});

// Fahrenheit to Celsius
function FtoC(num) {
    output.innerText = (Math.round(((num-32)*5)/9)) + "°C";
}

// Celsius to Fahrenheit
function CtoF(num) {
    output.innerText = (Math.round(((num/5)*9)+32)) + "°F";
}


