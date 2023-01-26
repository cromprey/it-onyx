$( "#CircleForm" ).validate({

});

function displayCircle() {
    // if the form is valid, then make the calculations
    if ($("#CircleForm").valid()) {
        
        //clear out any old calculations
         document.getElementById("diameter").innerHTML = "";
         document.getElementById("circumference").innerHTML = "";
         document.getElementById("area").innerHTML = "";

         var radius; // string representation of the radius
         var radiusfp; // floating point value of radius
         var diameter;  // floating point diameter
         var circumference; // floating point circumference
         var area; // floating point area
         var result; // displayable result

         // read in the radius as a string
         radius = document.getElementById("radius").value;

         // Convert numbers from strings to Floating Point
         radiusfp = parseFloat( radius ); 

         // calculate the diameter
         diameter = calcDiameter(radius);

         // display the diameter
         document.getElementById("diameter").innerHTML = diameter.toString();

         // calculate the circumference
         circumference = calcCircumference(radius);

         // display the circumference
         document.getElementById("circumference").innerHTML = circumference.toString();

         // calculate the area
         area = calcArea(radius);

         // display the area
         document.getElementById("area").innerHTML = area.toString();
         
    }
}

  function calcDiameter (r)
  // returns diameter of a circle using the radius
  // 2 times the radius
  {
      return 2 * r;
  }
  
  function calcCircumference (r)
  //returns circumference of a circle
  // 2 times pi times radius
  {
    return 2 * r * Math.PI;
  }

  function calcArea (r)
  // returns the area of the circle
  // pi time r^2
  {
    return Math.PI * r * r;
  }

  function clearForm()
{
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}