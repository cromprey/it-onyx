function calculate(){
    "use strict";

// Get a reference to the form - Use the ID of the form
var form = $( "#myForm" );


// If all of the form elements are valid, get the form values
if (form.valid()) {
    
    //fromValue
    var fromValue = document.getElementByID("fromValue").value;

    //fromUnit
    // Get the value associated with the operator that was checked (cm, m, km, in, ft, yds, mi)
    var fromUnit;
    if( document.getElementById("cm").checked) {
        fromUnit = document.getElementById("cm").value;
    }
    if( document.getElementById("m").checked) {
        fromUnit = document.getElementById("m").value;
    }
    if( document.getElementById("km").checked) {
        fromUnit = document.getElementById("km").value;
    }
    if( document.getElementById("in").checked) {
        fromUnit = document.getElementById("in").value;
    }
    if( document.getElementById("ft").checked) {
        fromUnit = document.getElementById("ft").value;
    }
    if( document.getElementById("yds").checked) {
        fromUnit = document.getElementById("yds").value;
    }
    if( document.getElementById("mi").checked) {
        fromUnit = document.getElementById("mi").value;
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
    myURL = myURL + "?fromValue=" + encodeURIComponent(fromValue) + "&fromUnit=" + encodeURIComponent (fromUnit) + "&toUnit=" + encodeURIComponent(toUnit);

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
    document.getElementById("cm").checked = false;
    document.getElementById("m").checked = false;
    document.getElementById("km").checked = false;
    document.getElementById("in").checked = false;
    document.getElementById("ft").checked = false;
    document.getElementById("yds").checked = false;
    document.getElementById("mi").checked = false;
    document.getElementById("centimeters").checked = false;
    document.getElementById("meters").checked = false;
    document.getElementById("kilometers").checked = false;
    document.getElementById("inches").checked = false;
    document.getElementById("feet").checked = false;
    document.getElementById("yards").checked = false;
    document.getElementById("miles").checked = false;
    document.getElementById("result").innerHTML = "";
}

$( "#myform" ).validate({

});
