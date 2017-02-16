// Business or BackEnd logic

var multiply = function(number1, number2) {
    return number1 * number2
};

var divide = function(number1, number2) {
    return number1 / number2
};

//Everything from here down is the UI or FrontEnd logic

$(document).ready(function() {
  $("form#lb-oz").submit(function(event) {
    var number1 = parseInt($("#lb").val());
    var result = (multiply(number1, 16));
    $("output#output-oz").text(result);
    event.preventDefault();
  })

  $("form#oz-lb").submit(function(event) {
    var number1 = parseInt($("#oz").val());
    var result = (divide(number1, 16));
    $("output#output-lb").text(result);
    event.preventDefault();
  })

  $("form#cup-tbsp").submit(function(event) {
    var number1 = parseInt($("#cup1").val());
    var result = (multiply(number1, 16));
    $("output#output-tbsp1").text(result);
    event.preventDefault();
  })

  $("form#cup-tsp").submit(function(event) {
    var number1 = parseInt($("#cup2").val());
    var result = (multiply(number1, 48));
    $("output#output-tsp1").text(result);
    event.preventDefault();
  })

  $("form#tbsp-tsp").submit(function(event) {
    var number1 = parseInt($("#tbsp1").val());
    var result = (multiply(number1, 3));
    $("output#output-tsp2").text(result);
    event.preventDefault();
  })

  $("form#tbsp-cup").submit(function(event) {
    var number1 = parseInt($("#tbsp2").val());
    var result = (divide(number1, 16));
    $("output#output-cup1").text(result);
    event.preventDefault();
  })

  $("form#tsp-tbsp").submit(function(event) {
    var number1 = parseInt($("#tsp1").val());
    var result = (divide(number1, 3));
    $("output#output-tbsp2").text(result);
    event.preventDefault();
  })

  $("form#tsp-cup").submit(function(event) {
    var number1 = parseInt($("#tsp2").val());
    var result = (divide(number1, 48));
    $("output#output-cup2").text(result);
    event.preventDefault();
  })

});
