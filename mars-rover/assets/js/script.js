function getPhotos() {
    "use strict";


    var form = $("#myform");


    form.validate();


    if (form.valid()) {


        var photoDate = document.getElementById("photoDate").value;
        //My API Key
        var apiKey = "AsrgY7IZDgpA2a5gybncIi7nJEGZ7xRwVfrCI00P";


        var roverChoice;
        if (document.getElementById("Curiosity").checked) {
            roverChoice = document.getElementById("Curiosity").value;
        }
        if (document.getElementById("Opportunity").checked) {
            roverChoice = document.getElementById("Opportunity").value;
        }
        if (document.getElementById("Spirit").checked) {
            roverChoice = document.getElementById("Spirit").value;
        }


        var myURL = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + roverChoice + "/photos?earth_date=" + photoDate + "&page=1&api_key=" + apiKey;


        var myMethod = "GET";


        $(document).ready(function () {


            $.ajax({
                method: myMethod,
                url: myURL
            })


                .done(function (msg) {


                    var numphotos = msg.photos.length;
                    if (numphotos > 0) {
                        for (var i = 0; i < 25; i++) {
                            if (i < numphotos) {
                                document.getElementById("image" + i).src = msg.photos[i].img_src;
                                document.getElementById("anchor" + i).href = msg.photos[i].img_src;
                                document.getElementById("image" + i).title = msg.photos[i].camera.full_name;
                                document.getElementById("text1").innerHTML = msg.photos.length + " photos found";
                                document.getElementById("text2").innerHTML = "Click a photo to display full size";
                            }


                            else {
                                document.getElementById("image" + i).src = "#";
                                document.getElementById("anchor" + i).href = "#";
                                document.getElementById("image" + i).style.display = "none";
                            }
                        }
                    }
                })


                .fail(function (msg) {
                    alert("Rover Not Found - Status: " + msg.status);
                });
        });
    }
}


function clearform() {
    for (var i = 0; i < 25; i++) {
        document.getElementById("Curiosity").checked = false;
        document.getElementById("Opportunity").checked = false;
        document.getElementById("Spirit").checked = false;
        document.getElementById("photoDate").value = "";
        document.getElementById("roverError").innerHTML = "";
        document.getElementById("photoDateError").innerHTML = "";
        document.getElementById("image" + i).src = "#";
        document.getElementById("anchor" + i).href = "";
        document.getElementById("image" + i).title = "";
        document.getElementById("text1").innerHTML = "";
        document.getElementById("text2").innerHTML = "";
    }
}


function getCuriosity() {
    document.getElementById("photoDate").value = "2012-08-06";
}


function getOpportunity() {
    document.getElementById("photoDate").value = "2004-01-26";
}


function getSpirit() {
    document.getElementById("photoDate").value = "2004-01-05";
}
