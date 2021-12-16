function conceptOne() {
    // Changes paragraph using .innerHtml
    document.getElementById("conceptOne").innerHTML = "WOW! I can change the text in a paragraph using the document.getElementById(id) method.";
}

function conceptTwo() {
    //Calculates 100 + 50
    document.getElementById("conceptTwoAnswer").innerHTML = 100 + 50
}

function conceptThree() {
    //Displays the date in JavaScript using new Date()
    const d = new Date();
    document.getElementById("conceptThreeAnswer").innerHTML = d;
}

function conceptFour() {
    //Displays an alert depending on how many characters the user enters in the textbox
    var userInput = document.getElementById("characters").value;
    var length = userInput.length;
    if (length > 5 || length < 5) {
        alert("PLEASE ENTER 5 CHARACTERS!");
    }
    if (length == 5) {
        alert("Congratulations, you follow directions!");
}
}

function conceptFive() {
    //Using join() to join together array elemtns with "-" as the separator
    const fruits = ["Apple", "Orange", "Strawberry", "Grape", "Cherry"];
    document.getElementById("conceptFiveAnswer").innerHTML = fruits.join(" - ");
}