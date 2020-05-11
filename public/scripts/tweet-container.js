$(document).ready(function() {
  $(".tweet-container").mouseover(function() {
    console.log(this);
    $(this)
      .find(".tweet-container-content")
      .css("color", "#222");
    $(this)
      .find("span")
      .css("color", "#222");
    $(this)
      .find("#header-name")
      .text("@Sirlsaac")
      .css("color", "#666")
      .css("font-size", "2rem");
  });
  $(".tweet-container").mouseleave(function() {
    console.log(this);
    $(this)
      .find("#header-name")
      .text("");
    $(this)
      .find(".tweet-container-content")
      .css("color", "#aaa");
    $(this)
      .find("span")
      .css("color", "#aaa");
  });
});
