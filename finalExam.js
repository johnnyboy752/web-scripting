//This function makes the HTML change for the paragraph with id "conceptOne".
function conceptOne() {
    // Changes paragraph using .innerHtml
    document.getElementById("conceptOne").innerHTML = "WOW! I can change the text in a paragraph using the document.getElementById(id) method.";
}

//Adds 100 + 50 
function conceptTwo() {
    //Calculates 100 + 50
    document.getElementById("conceptTwoAnswer").innerHTML = 100 + 50
}

//displays the date by creating a variable and assigngin it the current date and time.
function conceptThree() {
    //Displays the date in JavaScript using new Date()
    const d = new Date();
    document.getElementById("conceptThreeAnswer").innerHTML = d;
}

//grabs input from the user and displays an alert box depending on the number of characters the user entered.
//If they enter anything other than 5 characters they will get an alert box that tells them to eneter 5 characters
//Ift they enter 5 characters then the user gets an alert box congratulating them
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

//This function creates an array stored in a variable called fruits. The join() string method is used to join the array elements together with hypens (-)
function conceptFive() {
    //Using join() to join together array elemtns with "-" as the separator
    const fruits = ["Apple", "Orange", "Strawberry", "Grape", "Cherry"];
    document.getElementById("conceptFiveAnswer").innerHTML = fruits.join(" - ");
}

//creates variables that store user input and then class is creates that stores that user 
function conceptSix() {
    //Creating a student class with properties of first name, age, and grade. Then taking user input from text boxes and creating a student object.
    var firstName = document.getElementById("fName").value;
    var userAge = document.getElementById("age").value;
    var userGrade = document.getElementById("grade").value;
    class Student {
        constructor(fName, age, grade) {
            this.fName = fName;
            this.age = age;
            this.grade = grade;
        }
    }
    const myStudent = new Student(firstName, userAge, userGrade);

    //Error checking for concept Six. This if statement checks if any of the boxes are empty, and if they are an alert box will show on the page and it will ask the user to fill out all 
    //fields for concept six
    if(firstName == "" || userAge == "" || userGrade == ""){
        alert("Please fill out all fields in Concept 6!")
        document.getElementById("test").innerHTML = "";
        return;
    }
    //displays the user enered information for first name age and grade 
    document.getElementById("test").innerHTML = "Hello " + myStudent.fName + "." + " It looks like you are " + myStudent.age + " years old and are in grade " + myStudent.grade + ".";
}

//object is created with properties firstName, lastName, age, and grade. The values of these propertie are also assisnged.
function conceptSeven() {

    const obj = {
        firstName: "Jeff",
        lastName: "Smith",
        age: 17,
        grade: 12
    };
        //uses  JSON.stringifty() to convert a javascript object into a JSON string.
    const myJSON = JSON.stringify(obj);
    document.getElementById("json").innerHTML = myJSON;
    document.getElementById("jsonFact").innerHTML = "Notice how the fields with number do not contain double quotes. This is to ensure they are not stored as strings and are stored as numbers."
}

function conceptEight() {
    //displays a date object
    const d = new Date();
    var date = d.toUTCString();
    document.getElementById("displayDate").innerHTML = date;
}

function concept8Extra() {
    //slices the previous date object
    const d = new Date();
    var date = d.toUTCString();
    document.getElementById("displayDateSliced").innerHTML = date.slice(0,16);
}

function conceptNine() {
    //uses the replace() method to replace the word "peppers" with "eggs"

    let text = document.getElementById("conceptNineAnswer").innerHTML;
    document.getElementById("conceptNineAnswer").innerHTML = text.replace("peppers","eggs");
}

function conceptTen() {
    //Displays last months date
    var currentDate;

    currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() - 1);
    document.getElementById("displayConcept10Date").innerHTML = currentDate.toLocaleDateString();
}