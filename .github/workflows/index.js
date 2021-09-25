//When the user clicks the buttons, the button is hidden and a fact is displayed in a paragraph below the button.

function myFact1() {
//First writes HTML to the paragraph tag with ID fact1 and then hides the button with ID button1
    document.getElementById("fact1").innerHTML = "<b>Scripts</b> are usually short computer programs that do steps that can be done one at a time by a person.";
    document.getElementById("button1").style.visibility = "hidden";
}

function myFact2() {
    //First writes HTML to the paragraph tag with ID fact2 and then hides the button with ID button2
    document.getElementById("fact2").innerHTML = "To reflect the global activities of the <b>ECMA</b>, the name was changed in 1994 to ECMA International.";
    document.getElementById("button2").style.visibility = "hidden";
}

function myFact3() {
    //First writes HTML to the paragraph tag with ID fact3 and then hides the button with ID button3
    document.getElementById("fact3").innerHTML = "Some <b>API</b>'s are called Web Services because they talk via the Internet.";
    document.getElementById("button3").style.visibility = "hidden";
}

function myFact4() {
//First writes HTML to the paragraph tag with ID fact4 and then hides the button with ID button4
    document.getElementById("fact4").innerHTML = "Latest version of <b>DOM</b> is DOM4 which came out in November of 2015.";
    document.getElementById("button4").style.visibility = "hidden";
}

function myFact5() {
    //First writes HTML to the paragraph tag with ID fact5 and then hides the button with ID button5
    document.getElementById("fact5").innerHTML = "The top level object in the <b>BOM</b> is the Window object.";
    document.getElementById("button5").style.visibility = "hidden";
}