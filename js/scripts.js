var triangle;
var whatTriangle = function(a, b, c) {
  if(a+b<=c || a+c<=b || b+c<=a) {
    alert("This isn't even a triangle");
  } else if(a==b && b==c) {
    triangle = "Equilateral";
  } else if(a==b || b==c || a==c) {
    triangle = "Isosceles";
  } else if(a!==b && b!==c && c!==a) {
    triangle = "Scalene"
  } else {
    alert("Check your input!")
  }
}

$(document).ready(function() {
  $("form").submit(function(event){

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    if(side1 + side2 + side3 > 0) {
      whatTriangle(side1, side2, side3);
      $(".results").text(triangle);
    } else {
      alert("Check your input!");
    };

    event.preventDefault();
  });
});
