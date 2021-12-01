/*The objectExample() function first creates a constant variable called exampleObj that is assigned  a string value written in JSON syntax. It then creates a constant object 
value and gives it the value of the parsed JSON exampleObj variable. This allows the new object created which is named obj to have values stored in it for name, make, model and year.
We then write to a paragraph element in HTML displaying the information from the parsed exampleObj variable. The button is then hidden.*/
function objectExample() {
const exampleObj = '{"name": "Joe", "make" : "Kia", "model" : "ForteLX", "year" : "2021"}'; // exampleObj being assigned a JSON syntax string
const obj = JSON.parse(exampleObj); // The string value of exampleObj is parsed andturned into a JavaSript object named obj
document.getElementById("displayObject").innerHTML = obj.name + " has a " + obj.year + " " + obj.make + " " + obj.model + "."; //Sentence displayed showing the properties and values of obj which is values from the exampleObj string
document.getElementById("button1").style.visibility = "hidden";//button is hidden
}

/*The stringifyExample() function first creates a  object named exampleObj and give it properties of name, make, model, and year and assigns values to those properties. A constant variable named myJSON is also created which 
turns the exampleObj into a string using the JSON.stringify function and passing the object into it. HTML is then written to a pargraph element with id displayStringify that displays the output of the JSON.stringifyfunction. It is the
exampleObj object written as a string in JSON syntax. The button is then hidden and a fact as to why the JSON.stringify function is useful appears. */
function stringifyExample() {
    const exampleObj = {name: "Joe", make: "Kia", model: "ForteLX", year:"2021"}; //exampleObj is an object that is assisgned properties and values
    const myJSON = JSON.stringify(exampleObj); //myJSON is a constant variable that is assisignd the JSON.stringify value from the exampleObj object. This creates a JSON sring
    document.getElementById("displayStringify").innerHTML = myJSON; //Sentence is then dispalyed showing the myJSON value which is a JSON string of the exampleObj object properties and values.
    document.getElementById("button2").style.visibility = "hidden"; //Button is hidden
    document.getElementById("Fact1").innerHTML = "This is useful because data sent to servers needs to be in string format. This allows objects to be created and sent to servers easily." //Fact displays as to why this is useful.
}

/*The dateExample() function first creates a constant variable named exampleDate that is assigned a string value written in JSON syntax. It then creates a object called obj which is assigned the parsed value of the exampleDate string. It is
parsed using the JSON.parse function which parses the exampleDate string and turns it into a JavaScript object called obj. The properties and values of the obj object can then be asscessed using JavaScript. The birth property value from the obj
object is assisnged as a Date object with the value from the birth property in the exampleDate string. HTML is then written to a paragraph element with id displayDate that displays a sentence with information from the values in the exampleDate 
string that was turned into a object using JSON.parse. By turning a JSON string date value into a  object using JSON.parse, the date can then be written in JavaScript since date objects are not allowed in JSON and need to be written as strings. */
function dateExample() {
    const exampleDate = '{"name":"Joe", "birth":"1990-12-09T18:25:43.511Z", "city":"Bedford", "state":"Ohio"}'; //exampleDate being assigned a JSON syntax string
    const obj = JSON.parse(exampleDate); //The string value of exampleDate is parsed and turned into a JavaScript object named obj
    obj.birth = new Date(obj.birth); //This allows the birth property value to be accessed and then assisgned as a Date object with the string value of the birth property passed into the date object.
    document.getElementById("displayDate").innerHTML = obj.name + " was born in " + obj.city + ", " + obj.state + " on " + obj.birth; //Sentence is then displayed showing the date object using the JSON string after being parsed.
    document.getElementById("button3").style.visibility = "hidden"; //button is hidden
}