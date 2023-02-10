function calculate(){
    "use strict";

// Get a reference to the form - Use the ID of the form
var form = $( "#myform" );


// If all of the form elements are valid, get the form values
if (form.valid()) {
    
    //fromValue
    var fromValue = document.getElementByID("fromValue").value;

    //fromUnit
    // Get the value associated with the operator that was checked (cm, m, km, in, ft, yds, mi)
    var fromUnit;
    if( document.getElementById("centimeters").checked) {
        fromUnit = document.getElementById("centimeters").value;
    }
    if( document.getElementById("meters").checked) {
        fromUnit = document.getElementById("meters").value;
    }
    if( document.getElementById("kilometers").checked) {
        fromUnit = document.getElementById("kilometers").value;
    }
    if( document.getElementById("inches").checked) {
        fromUnit = document.getElementById("inches").value;
    }
    if( document.getElementById("feet").checked) {
        fromUnit = document.getElementById("feet").value;
    }
    if( document.getElementById("yards").checked) {
        fromUnit = document.getElementById("yards").value;
    }
    if( document.getElementById("miles").checked) {
        fromUnit = document.getElementById("centimeters").value;
    }

    //toUnit
    //will convert formUnit to toUnit if the operator was checked (cm, m, km, in, ft, yds, mi)
    var toUnit;
    if( document.getElementById("centimeters").checked) {
        toUnit = document.getElementById("centimeters").value;
    }
    if( document.getElementById("meters").checked) {
        toUnit = document.getElementById("meters").value;
    }
    if( document.getElementById("kilometers").checked) {
        toUnit = document.getElementById("kilometers").value;
    }
    if( document.getElementById("inches").checked) {
        toUnit = document.getElementById("inches").value;
    }
    if( document.getElementById("feet").checked) {
        toUnit = document.getElementById("feet").value;
    }
    if( document.getElementById("yards").checked) {
        toUnit = document.getElementById("yards").value;
    }
    if( document.getElementById("miles").checked) {
        toUnit = document.getElementById("centimeters").value;}
    
    calculateResult(fromValue, fromUnit, toUnit);
}
}

async function calculateResult(fromValue, fromUnit, toUnit) {
    //URL method and AJAX Call
    var myURL = "http://brucebauer.info/assets/ITEC3650/gethint.php";

    //AJAX operator requires fromValue, fromUnit, toUnit
    myURL = myURL + "?fromValue" + encodeURIComponent(fromValue) + "&fromUnit=" + encodeURIComponent (fromUnit) + "&toUnit=" + encodeURIComponent(toUnit);

    //fetch the results
    let myCalcObject = await fetch(myURL);
    let myResult = await myCalcObject.text();

    document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("fromValue").value = "";
    document.getElementById("fromValueError").innerHTML = "";
    document.getElementById("centimeters").checked = false;
    document.getElementById("meters").checked = false;
    document.getElementById("kilometers").checked = false;
    document.getElementById("inches").checked = false;
    document.getElementById("feet").checked = false;
    document.getElementById("yards").checked = false;
    document.getElementById("miles").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});
