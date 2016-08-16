$(document).ready(function(){
  $("#program").submit(function(event){
    var number = parseFloat($("#countTo").val());
    var multi = parseFloat($("#multiple").val());
    var output = 0;

    if (number !== NaN || multi !== NaN) {
      alert("That's not a number!");
      return[0];
    };
    for(var index=0; index<=number; index+=multi){
      output = index;

      $("#results").append("<li>" + output + "</li>");
      event.preventDefault();
    };
  });
});
