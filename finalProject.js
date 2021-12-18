/* addEventListener */
document.getElementById("gpaCalculator").addEventListener("submit", gpaCalculator);

/* This function will accept user input, process it, and then display the output in a div elemnt for results. Function name 
is the same as the form ID. Parameter is event */
function gpaCalculator(event)
{
    //preventDefault method prevents the browser from clearing user-input entries when the user submites the form
    event.preventDefault();
    // Declare variables for user-input values
    // It is best to use the same name for each input as the id
    // There is a set of variables for course names called course1-5, a set of variables for the credit hours calld creditHours1-5, a set of variables for grade ponit values called 
    // grade1-5, a set of variables that calculates the total grade points for each course based on credit hours and grade recieved called totalGradePoints1-5, and there is also a set of varibes used for 
    // calculating the total credit hours called totalCreditHours, variable for calculating the grand total of grade points recieved called grandTotalGradePoints,
    // a variable called gpa which calculates the exact gpa and a variable called gpaEstimte which rounds the gpa three places after the decimal.
    var fName = document.getElementById("fName").value,
    lName = document.getElementById("lName").value,
    course1 = document.getElementById("course1").value,
    course2 = document.getElementById("course2").value || "(Empty)",
    course3 = document.getElementById("course3").value || "(Empty)",
    course4 = document.getElementById("course4").value || "(Empty)",
    course5 = document.getElementById("course5").value || "(Empty)",
    creditHours1 = parseFloat(document.getElementById("creditHours1").value, 10) || 0,
    creditHours2 = parseFloat(document.getElementById("creditHours2").value, 10) || 0,
    creditHours3 = parseFloat(document.getElementById("creditHours3").value, 10) || 0,
    creditHours4 = parseFloat(document.getElementById("creditHours4").value, 10) || 0,
    creditHours5 = parseFloat(document.getElementById("creditHours5").value, 10) || 0,
    grade1 = parseFloat(document.getElementById("grade1").value, 10) || 0,
    grade2 = parseFloat(document.getElementById("grade2").value, 10) || 0,
    grade3 = parseFloat(document.getElementById("grade3").value, 10) || 0,
    grade4 = parseFloat(document.getElementById("grade4").value, 10) || 0,
    grade5 = parseFloat(document.getElementById("grade5").value, 10) || 0,
    totalGradePoints1 = creditHours1 * grade1,
    totalGradePoints2 = creditHours2 * grade2,
    totalGradePoints3 = creditHours3 * grade3,
    totalGradePoints4 = creditHours4 * grade4,
    totalGradePoints5 = creditHours5 * grade5,
    totalCreditHours = creditHours1 + creditHours2 + creditHours3 + creditHours4 + creditHours5,
    grandTotalGradePoints = totalGradePoints1 + totalGradePoints2 + totalGradePoints3 + totalGradePoints4 + totalGradePoints5,
    gpa = grandTotalGradePoints / totalCreditHours,
    gpaEstimate = gpa.toFixed(3);

    //Error sections that alerts user if they do not fill out all three fields for a single course.
    if(course2 !="(Empty)" && creditHours2 == 0 && grade2 ==0){
        alert("Please fill out ALL fields within a course selection");
        return;
    }
    
    if(course3 !="(Empty)" && creditHours3 == 0 && grade3 ==0){
        alert("Please fill out ALL fields within a course selection");
        return;
    }
    
    if(course4 != "(Empty)" && creditHours4 == 0 && grade4 ==0){
        alert("Please fill out ALL fields within a course selection");
        return;
    }
    
    if(course5 != "(Empty)" && creditHours5 == 0 && grade5 ==0){
        alert("Please fill out ALL fields within a course selection");
        return;
    }

    //This is happens after the variables are calculated and shows results below the buttons on the form in various paragraph elements.
    document.getElementById("greeting").innerHTML = "Hello " + fName + " " + lName + "!<br>" + "Here are the results of your GPA calculation<br>";
    document.getElementById("courseList").innerHTML = "The courses that you entered were the following:<br>" + "\n" + 
    "Course 1 - " + course1 + "<br>" + "Course 2 - " + course2 + "<br>" + "Course 3 - " + course3 + "<br>" + "Course 4 - " + course4 + "<br>" + "Course 5 - " + course5 + "<br>";
    document.getElementById("displayGradePoints").innerHTML = "Your grades give you a total of " + grandTotalGradePoints + " points.<br>";
    document.getElementById("displayCreditHours").innerHTML = "These points will be divided by the total number of credit hours, which for you is " + totalCreditHours + "<br>";
    document.getElementById("displayGPA").innerHTML = "Your GPA is " + gpa + " with an estimated GPA of " + gpaEstimate;
    document.getElementById("goodbye").innerHTML = "Have a good one, " + fName + "!";
}

//This is a function to clear the results from the calculator
function resultsClear() {
    document.getElementById("greeting").innerHTML = " ";
    document.getElementById("courseList").innerHTML = " ";
    document.getElementById("displayGradePoints").innerHTML = " ";
    document.getElementById("displayCreditHours").innerHTML = " ";
    document.getElementById("displayGPA").innerHTML = " ";
    document.getElementById("goodbye").innerHTML = " ";
}