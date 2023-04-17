async function getPhotos1() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var photoDate = document.getElementById("photoDate").value;
        var apiKey = "fwB9HJgg1OfidGGwazfRpJQHOcmgaAjdv12vajqQ";

        var roverChoice;
        if(document.getElementById("Curiosity").checked){
            rover = document.getElementById("Curiosity").value;
        }

        if(document.getElementById("oOportunity").checked){
            rover = document.getElementById("Opportunity").value;
        }

        if(document.getElementById("Spirit").checked){
            rover = document.getElementById("Spirit").value;
        }

        /* https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY */
        // URL for AJAX Call

        var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverChoice + "/photos?earth_date=" + photoDate + "&api_key=api_key" + apiKey;
        var myMethod = "GET";

        $(document).ready(function() {

            $.ajax({
                method: myMethod,
                url: myURL
            })

                .done(function(msg) {

                    var numphotos = msg.photos.length;
                    if (numphotos > 0) {
                        for (var i = 0; i < 25; i++) {
                            if (i < numphotos) {
                                document.getElementById("mars1" + i).src = msg.photos[i].img_src;
                                document.getElementById("mars1" + i).title = msg.photos[i].camera.full_name;
                                document.getElementById("text1").innerHTML = msg.photos.length + "found photos";
                                document.getElementById("text2").innerHTML = "Click a picture to display full size.";
                            }

                            else{
                                document.getElementById("rover1" + i).src = "#";
                                document.getElementById("anchor" + i).href = "#";
                                document.getElementById("mars1" + i).style.display = "none";
                            }
                        }
                    }
                })
        

                .fail(function (msg) {
                    alert = "Rover not found - Status: " + msg.status;
                });
            });

    
    }

}

function clearform() {
    for (var i = 0; i < 25; i++) {
        document.getElementById("Curiousity").checked = false;
        document.getElementById("Opportunity").checked = false;
        document.getElementById("Spirit").checked = false;
        document.getElementById("photoDate").value = "";
        document.getElementById("roverError").innerHTML = "";
        document.getElementById("photoDateError").innerHTML = "";
        document.getElementById("rover1" + i).src = "#";
        document.getElementById("anchor" + i).href = "";
        document.getElementById("mars1" + i).title = "";
        document.getElementById("text1").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
    }
}

function getCuriosity(){
    document.getElementById("photoDate").value= "2012-08-06";
}

function getOpportunity(){
    document.getElementById("photoDate").value = "2004-01-26";
}

function getSpirit(){
    document.getElementById("photoDate").value = "2004-01-05";
}


