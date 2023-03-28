function myFunction() {
    var pictureDate;
    if(document.getElementById("curiosity").checked){
        document.getElementById("picturedate").value="2012-08-06";
    }

    if(document.getElementById("opportunity").checked){
        document.getElementById("picturedate").value="2004-01-26";
    }

    if(document.getElementById("spirit").checked){
        document.getElementById("picturedate").value="2012-01-05";
    }
}

async function showPhotos() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        // Get the value associated with the operator that was checked.
        var rover;
        if(document.getElementById("curiosity").checked){
            rover = document.getElementById("curiosity").value;
        }

        if(document.getElementById("opportunity").checked){
            rover = document.getElementById("opportunity").value;
        }

        if(document.getElementById("spirit").checked){
            rover = document.getElementById("spirit").value;
        }

        var pictureDate = document.getElementById("pictureDate").value;
        var apiKey = "fwB9HJgg1OfidGGwazfRpJQHOcmgaAjdv12vajqQ";

        /* https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY */
        // URL for AJAX Call
        var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover + "/photos?earth_date=" + pictureDate + "&api_key=DEMO_KEY" + apiKey;

        let pictureObject = await fetch(myURL);
        let result = await pictureObject.text();
        let msg = JSON.parse(Result);
        document.getElementById("numberofphotos").innerHTML = msg.photos.length + "pictures found"
            if(numberofphotos > 25)
            {numberofphotos = 25}

            for (i = 0; i < 25; i++) {
                // Note how we construct the name for image1, image2, etc...this sets the image source
                document.getElementById("image" + i).src = msg.photos[i].img_src;
                /* do something to set the tool tip = msg.photos[i].camera.full_name; */
                document.getElementById("image" + i).style.visibility = "visible";
                document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
            }




        var ConvertCurrency = document.getElementById("ConvertCurrency").value;
        var apiKey = "35eaVfKsObXpSg2O4kMLj9udr2DgVW1f"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;
        //https://api.polygon.io/v2/aggs/ticker/C:EURUSD/range/1/day/2023-01-09/2023-01-09?adjusted=true&sort=asc&limit=120&apiKey=*
        /* URL for AJAX Call */
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/C:" + BaseCurrency + ConvertCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;
    
    }

}