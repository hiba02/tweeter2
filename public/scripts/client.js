/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  // loops through tweets
  $.each(tweets, function(index, articleObj) {
    $(".tweets-container").prepend(createTweetElement(articleObj));
  });
};

const createTweetElement = tw => {
  console.log(tw);
  const $tweet = $(`     
  <div class="tweet-container">
    <div class="tweet-container-head">
      <span class="head1"><img src=${tw[`user`].avatars} alt="head" /></span>
      <span class="head2">${tw["user"].name}</span>
      <span class="head3"></span>
      <span class="head4" id="header-name">${tw["user"].handle}</span>
    </div>
    <div class="tweet-container-content">
      ${sanitzieText(tw["content"].text)}
    </div>
    <footer>
      <span>10 days ago</span>
      <span>icons</span>
    </footer></div>`);
  return $tweet;
};

// ajax load tweets
const loadTweets = () => {
  $.ajax({
    url: "http://localhost:8080/tweets",
    type: "get",
    dataType: "json",
    success: function(data) {
      console.log("success: ", data);
      renderTweets(data);
    }
  });
};

// ???? it did not work -> change to body on event
// #w4d3 jquery quiz #5
const containerEffect = () => {
  $("body").on("mouseover", ".tweet-container", function() {
    console.log(this);
    $(this)
      .find(".tweet-container-content")
      .css("color", "#222");
    $(this)
      .find("span")
      .css("color", "#222");
    $(this)
      .find("#header-name")
      // .text("@Sirlsaac")
      .css({ opacity: 1 })
      .css("color", "#666")
      .css("font-size", "2rem");
  });
  $("body").on("mouseleave", ".tweet-container", function() {
    console.log(this);
    $(this)
      .find("#header-name")
      // .css("");
      .css({ opacity: 0 });
    $(this)
      .find(".tweet-container-content")
      .css("color", "#aaa");
    $(this)
      .find("span")
      .css("color", "#aaa");
  });
};

const validationText = text => {
  if (text.length === 0) {
    $("#warning").html("<h2>Try again</h2>");
    return;
  } else {
    return text;
  }
};

const sanitzieText = text => {
  let $sp = document.createElement("span");
  $sp.appendChild(document.createTextNode(text));
  return $sp.innerHTML;
};

$(document).ready(function() {
  // sending data to server by ajax
  $("#formSubmit").on("submit", function(event) {
    event.preventDefault();
    let textAreaContent = sanitzieText($("textarea").val());
    // const $newText = textAreaContent.text()
    console.log("textAreaContent length: ", textAreaContent.length);

    if (textAreaContent.length === 0) {
      $(".new-tweet p").slideUp();
      return $(".new-tweet").prepend(
        "<p class='caution'>Please type any content before pushing tweet button.</p>"
      );
    } else if (textAreaContent.length > 140) {
      $(".new-tweet p").slideUp();
      return $(".new-tweet").prepend(
        "<p class='caution'>Your tweet content is too long. Please type less than 140 characters. Click 'Write a new tweet' (arrow) button again.</p>"
      );
    }
    $.ajax({
      url: "http://localhost:8080/tweets",
      type: "post",
      data: $(this).serialize(),
      success: function(data) {
        console.log("success: ", data);
        // loadTweets();
      }
    });
    //initialize tweet-container
    $(".tweets-container").html("");
    containerEffect();
    loadTweets();
    // empty text area
    $("textarea").val("");
    $("textarea").focus();
    $(".new-tweet p").hide();
  });
  containerEffect();
  loadTweets();
  // renderTweets(tweetData);
});
