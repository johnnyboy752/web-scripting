document.getElementById("numberOutput").addEventListener("submit", numberOutput);

function numberOutput(event) {
event.preventDefault();

var isNumber = parseFloat(document.getElementById("userInput").value);
var output = Number.isInteger(isNumber);
document.getElementById("displayAnswer").innerHTML = 'Will display "True" if number or "False" if not a number: ' + output;
}



document.getElementById("makeExponential").addEventListener("submit", makeExponential);

function makeExponential(event) {
event.preventDefault();

var nonExponent = parseFloat(document.getElementById("exponentInput").value);
var exponentOutput = nonExponent.toExponential();
document.getElementById("displayExponent").innerHTML = "The Exponential Notation of " + nonExponent + " is " + exponentOutput;
}

document.getElementById("makePercise").addEventListener("submit", makePrecise);

function makePrecise(event) {
    event.preventDefault();

    var nonPercise = parseFloat(document.getElementById("percisionInput").value);
    var percisionOutput = nonPercise.toPrecision(4);
    document.getElementById("displayPercision").innerHTML = "The number inputed was " + nonPercise + ". " + "This number rounded two places after the decimal is " + percisionOutput;
}

document.getElementById("makeFixed").addEventListener("submit", makeFixed);

function makeFixed(event) {
    event.preventDefault();

    var nonFixed = parseFloat(document.getElementById("fixedInput").value);
    var fixedOutput = nonFixed.toFixed(2);
    document.getElementById("displayFixed").innerHTML = "The number inputed was " + nonFixed + ". " + "This number rounded two places after the decimal is " + fixedOutput;
}

document.getElementById("checkNumber").addEventListener("submit", checkNumber);

function checkNumber(event) {
    event.preventDefault();

    var userNumber = parseFloat(document.getElementById("numberInput").value);
    var userOutput = Number.isNaN(userNumber);
    document.getElementById("displayNumber").innerHTML = 'Will display "false" if value is a number and "true" if value is not a number.: ' + userOutput;
}