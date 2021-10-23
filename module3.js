// Adds event listener to the numberOutput form 
document.getElementById("numberOutput").addEventListener("submit", numberOutput);

//Function is called when a user clicks the first button on the page. This takes the value that the user inputs in the first text box and displays either
// true or false depending on what the user inputs. Displays True if input is a number and False if input is not a number
function numberOutput(event) {
event.preventDefault();

var isNumber = parseFloat(document.getElementById("userInput").value);
var output = Number.isInteger(isNumber);
document.getElementById("displayAnswer").innerHTML = 'Will display "True" if number or "False" if not a number: ' + output;
}


// Adds event listener to the makeExponential form
document.getElementById("makeExponential").addEventListener("submit", makeExponential);

//Function is called when a user clicks the second button on the page. This takes the value that the user inputs in the second text box and displays
//the exponential notation of that number.
function makeExponential(event) {
event.preventDefault();

var nonExponent = parseFloat(document.getElementById("exponentInput").value);
var exponentOutput = nonExponent.toExponential();
document.getElementById("displayExponent").innerHTML = "The Exponential Notation of " + nonExponent + " is " + exponentOutput;
}

// Adds event listener to the makePercise form
document.getElementById("makePercise").addEventListener("submit", makePrecise);

//Function is called when a user clicks the third button on the page. This takes the value that the user inputs in the third text box and displays the number
//rounded four places into the number. The number will round to whatever place is indicated by the x present within the toPrecision(x) javascript number method.
function makePrecise(event) {
    event.preventDefault();

    var nonPercise = parseFloat(document.getElementById("percisionInput").value);
    var percisionOutput = nonPercise.toPrecision(4);
    document.getElementById("displayPercision").innerHTML = "The number inputed was " + nonPercise + ". " + "This number rounded two places after the decimal is " + percisionOutput;
}

// Adds event listener to the makeFixed form
document.getElementById("makeFixed").addEventListener("submit", makeFixed);

//Function is called when a user clicks the fourth button on the page. This takes the value that the user inputs in the fourth text box and displays the number
//rounded two places after the decimal. The number will round to whatever place after the decimal point by changing the x portion of the toFixed(x) javascript number method.
function makeFixed(event) {
    event.preventDefault();

    var nonFixed = parseFloat(document.getElementById("fixedInput").value);
    var fixedOutput = nonFixed.toFixed(2);
    document.getElementById("displayFixed").innerHTML = "The number inputed was " + nonFixed + ". " + "This number rounded two places after the decimal is " + fixedOutput;
}

// Adds event listener to the checkNumber form
document.getElementById("checkNumber").addEventListener("submit", checkNumber);

//Function is called when a user clicks the fifth button on the page. This take the value that the user inputs in the fifth text box and displays either true or false
//depending on what the user inputs. If the user inputs a number then the the number method NaN() which stands for "Not a Number" will come back false. If the 
//user inputs a string, then it will produce true, because the input is "Not a Number".
function checkNumber(event) {
    event.preventDefault();

    var userNumber = parseFloat(document.getElementById("numberInput").value);
    var userOutput = Number.isNaN(userNumber);
    document.getElementById("displayNumber").innerHTML = 'Will display "false" if value is a number and "true" if value is not a number.: ' + userOutput;
}