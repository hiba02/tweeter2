$(document).ready(function() {
  let position = $(window).scrollTop();
  console.log("position:  ", position);
  $(".arrow").hide();
  $(window).scroll(function() {
    $(".arrow")
      .show()
      .css("cursor", "pointer");
  });
  $(".arrow").click(function() {
    $(".new-tweet").toggle(function() {});
    $("#tweet-text").focus();
    $(".arrow").hide();
  });
});
