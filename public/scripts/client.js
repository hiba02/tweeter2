/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac"
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants"
    },
    created_at: 1461116232227
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd"
    },
    content: {
      text: "Je pense , donc je suis"
    },
    created_at: 1461113959088
  }
];

const oneTweet = {
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac"
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants"
  },
  created_at: 1461116232227
};

const renderTweets = function(tweets) {
  // loops through tweets
  $.each(tweets, function(index, articleObj) {
    $(".tweets-container").append(createTweetElement(articleObj));
  });
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
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
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    </div>
    <footer>
      <span>10 days ago</span>
      <span>icons</span>
    </footer></div>`);
  return $tweet;
};

// console.log($tweet);

const test = createTweetElement(oneTweet);

$(document).ready(function() {
  // $forRenderContainer = renderTweets(data);
  // $(".tweets-container").append($forRenderContainer);
  renderTweets(data);
});
