$(document).ready(function() {
  let number = 140;
  $(".counter").text(number);
  $("#tweet-text").keyup(function() {
    console.log("sucess!!🤓");
    if (number <= 0) {
      number = number - 1;
      $(".counter")
        .text(number)
        .css("color", "red");
      $(".counter").text(number);
    } else {
      number = number - 1;
      var message = $("#tweet-text").val();
      // console.log(number);
      $(".counter").text(number);
    }
  });
});
