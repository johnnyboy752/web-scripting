/* addEventListener */
document.getElementById("waterCalculator").addEventListener("submit", waterCalculator);

/* This function will accept user input, process it, and then display the output in a div elemnt for results. Function name 
is the same as the form ID. Parameter is event */
function waterCalculator(event)
{
    //preventDefault method prevents the browser from clearing user-input entries when the user submites the form
    event.preventDefault();
// Declare variables for user-input values
// It is best to use the same name for each input as the id
    var fName = document.getElementById("fName").value,
    lName = document.getElementById("lName").value,
    initialReading = parseFloat(document.getElementById("initialReading").value, 10),
    finalReading = parseFloat(document.getElementById("finalReading").value, 10),
    taxPercent = parseFloat(document.getElementById("taxPercent").value, 10);
    var waterRate;
    var totalWaterBill;
    var mathTax = taxPercent /100;

    document.getElementById("calculatorResults").style.visibility = "visible";
           
    // Variables for Error Messages
            var userErrorMessage;

            
    //Handle user-input errors for the iniital Reading and Final Reading
    //Display error messages and do not allow the form to process user input
        if (initialReading < 0)
        {
            userErrorMessage = 'The initial reading must be positive. Click "Clear" to clear this error message and try again.';
            document.getElementById("userErrorMessage").innerHTML = userErrorMessage;
            return;
        }
        if (finalReading < 0)
        {
            userErrorMessage = 'The final reading must be positive. Click "Clear" to clear this error message and try again.';
            document.getElementById("userErrorMessage").innerHTML = userErrorMessage;
            return;
        }
        if (finalReading < initialReading)
        {
            userErrorMessage = 'Final reading cannot be less then the initial reading. Click "Clear" to clear this error message and try again.';
            document.getElementById("userErrorMessage").innerHTML=userErrorMessage;
            return;
        }
    
    //Display First and Last name in results div element
    document.getElementById("firstLastNames").innerHTML = "Hello " + fName + " " + lName + ".";
    
    //Display the date in results div element
    const d = new Date();
    document.getElementById("displayTime").innerHTML = "Today's date is: " + d.toDateString()  + ".";

    // Display what period of time the Bill covers, the initial reading, final reading, total water usage, what the tax rate is, and the total for the bill
    document.getElementById("billFacts").innerHTML = "This bill covers the last month of water activity.";
    document.getElementById("iReading").innerHTML = "The initial reading was " + initialReading + " hcf.";
    document.getElementById("fReading").innerHTML = "The final reading was " + finalReading + " hcf.";
    document.getElementById("waterUsage").innerHTML = "Your total water usage for this month was " + (finalReading - initialReading) + " hcf.";
    document.getElementById("taxRate").innerHTML = "The tax rate is " + taxPercent + "%.";


    // Determines the rate depending on how many hcf's of water were used based on the final meter reading - inital meter reading
    var a = finalReading - initialReading;
    if ((a >= 0) && (a <= 30)) 
    {
        waterRate = 2.73;
        document.getElementById("testRate").innerHTML = "The rate you pay is $" + waterRate + " per hcf.";
    } else if ((a > 30) && (a <= 5000)) {
        waterRate = 2.45;
        document.getElementById("testRate").innerHTML = "The rate you pay is $" + waterRate + " per hcf.";
    } else {
        waterRate = 1.29;
        document.getElementById("testRate").innerHTML = "The rate you pay is $" + waterRate + " per hcf.";
    }

    // Calculate the total Water Bill
    var waterBillTax;
    var waterBill;
    //Equation to calculate water Bill without tax
    waterBill = (a * waterRate) + 4;
    // Equation to calculate Tax for the water bill
    waterBillTax =  waterBill * mathTax;
    // Equation to add the Tax to the water bill to get the Total Water Bill amount
    totalWaterBill = waterBill + waterBillTax;

    // Writes to the paragraph with id displayBillTotal what the total water bill is for the last month
    document.getElementById("displayBillTotal").innerHTML = "Your total bill for this month is $" + totalWaterBill.toFixed(2) + ".";

}

function erase()
{
    document.getElementById("fName").value = " ";
    document.getElementById("lName").value = " ";
    document.getElementById("initialReading").value = " ";
    document.getElementById("finalReading").value = " ";
    document.getElementById("taxPercent").value =  " ";
    document.getElementById("calculatorResults").style.visibility = "hidden";
    document.getElementById("userErrorMessage").innerHTML = " ";
}   