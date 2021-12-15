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
    taxPercent = parseFloat(document.getElementById("taxPercent").value, 10),
    waterUsage,
    totalWaterBill,
    mathTax = taxPercent /100,
    currentDate,
    yesterdayDate,
    previousDate,
    currentHour,
    dates,
    greeting,
    waterBill,
    waterBillTax,
    totalWaterBill;

    
 //Display the date in results div element
 currentDate = new Date();
 currentDate.getDate();
    
 currentHour = currentDate.getHours();
    
 yesterdayDate = new Date();
 yesterdayDate.setDate(currentDate.getDate() - 1);
 yesterdayDate = new Date(yesterdayDate).toUTCString();
 yesterdayDate = yesterdayDate.split(' ').slice(0, 4).join(' ');
    
    
 previousDate = new Date();
 previousDate.setMonth(previousDate.getMonth() - 1);
 previousDate = new Date(previousDate).toUTCString();
 previousDate = previousDate.split(' ').slice(0, 4).join(' ');
 
if (currentHour < 12) {
    greeting = "morning";
} else if (currentHour >= 12 && currentHour < 16) {
    greeting = "afternoon";
} else if (currentHour >= 16 && currentHour <=24) {
    greeting = "evening";
}

dates = "This is your Water Bill Statement printed today: " + currentDate + "." + "<br>";
dates += "This bill covers the water usage from: ";
dates += "<mark>" + previousDate + "</mark>" + " to " + "<mark>" + yesterdayDate + "</mark>.";


    document.getElementById("calculatorResults").style.visibility = "visible";    
    //Handle user-input errors for the initial Reading and Final Reading
    //Display error messages and do not allow the form to process user input
        if (initialReading < 0 || (finalReading < 0) || (taxPercent < 0))
        {
            alert("Error: \nThe initial reading cannot be less than zero. OR \nThe final reading cannot be less than zero. OR \nThe tax cannot be less than zero.");
            return;
        }
        if (finalReading < initialReading)
        {
            alert("Error: The final reading cannot be less than the inital reading!");
            return;
        }


    // Determines the rate depending on how many hcf's of water were used based on the final meter reading - inital meter reading
    waterUsage = finalReading - initialReading;
    if ((waterUsage >= 0) && (waterUsage <= 30)) 
    {
        waterBill = 2.73 * waterUsage + 4;
        waterBillTax = waterBill * mathTax;
        totalWaterBill = waterBillTax + waterBill;
    } else if ((waterUsage > 30) && (waterUsage <= 5000)) {
        waterBill = 2.45 * waterUsage + 12.4;
        waterBillTax = waterBill * mathTax;
        totalWaterBill = waterBillTax + waterBill;
    } else if (waterUsage > 5000) {
        waterBill = 1.29 * waterUsage + 5812.4;
        waterBillTax = waterBill * mathTax;
        totalWaterBill = waterBillTax + waterBill;
    }

    document.getElementById("firstLastNames").innerHTML = "Good " + greeting + " " + fName + " " + lName + ".";
    document.getElementById("dates").innerHTML = dates;
    document.getElementById("iReading").innerHTML = "The initial reading was " + initialReading + " hcf.";
    document.getElementById("fReading").innerHTML = "The final reading, as of yesterday, was " + finalReading + " hcf.";
    document.getElementById("waterUsage").innerHTML = "Your total water usage for this month was " + (finalReading - initialReading) + " hcf.";
    document.getElementById("taxRate").innerHTML = "The tax is $" + waterBillTax.toFixed(2) + ".";
    document.getElementById("displayBillTotal").innerHTML = "Your total water bill for this month is $" + totalWaterBill.toFixed(2) + ".";
    document.getElementById("thankYou").innerHTML = "Thank you for using this service! Have a wonderful rest of your " + greeting + "!";

}

function erase()
{
    document.getElementById("fName").value = " ";
    document.getElementById("lName").value = " ";
    document.getElementById("initialReading").value = " ";
    document.getElementById("finalReading").value = " ";
    document.getElementById("taxPercent").value =  " ";
    document.getElementById("calculatorResults").style.visibility = "hidden";
}   