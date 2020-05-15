$(document).ready(function() {
  $(".form-toggle").css("cursor", "pointer");

  $(".form-toggle").click(function() {
    $(".new-tweet").toggle(function() {});
    $("#tweet-text").focus();
  });
});
