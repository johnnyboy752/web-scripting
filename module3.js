document.getElementById("numberOutput").addEventListener("submit", numberOutput);

function numberOutput(event) {
event.preventDefault();

var isNumber = parseFloat(document.getElementById("userInput").value);
var output =Number.isInteger(isNumber);
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

    var 
}
