$(function() {

  "use strict";

  /*-----------------------------------
   * BROWSER TYPE CHECK
   * ----------------------------------*/

  var browser = 'chrome'; // Default to chrome
  var installUrl = '';
  if (
    navigator.userAgent.search("Opera") >= 0 ||
    navigator.userAgent.search("OPR") >= 0
  ) {
    browser = 'opera';
    // TODO: Update with Opera extension store URL.
    installUrl = 'https://github.com/wbobeirne/joule-extension/releases';
  }
  else if (navigator.userAgent.search("Chrome") >= 0) {
    browser = 'chrome';
    // TODO: Update with Chrome extension store URL.
    installUrl = 'https://github.com/wbobeirne/joule-extension/releases';
  }
  else if (navigator.userAgent.search("Firefox") >= 0) {
    browser = 'firefox';
    // TODO: Update with Firefox extension store URL.
    installUrl = 'https://github.com/wbobeirne/joule-extension/releases';
  }

  $('body').removeClass('no-browser');
  $('body').addClass('is-' + browser);

  /*-----------------------------------
   * INSTALL LINKS
   * ----------------------------------*/

  var links = $('a[data-install-link]');
  links.attr('href', installUrl);

  /*-----------------------------------
   * PLAY VIDEO
   * ----------------------------------*/

  $('.demo-video').on('click', function() {
    var video = $('.demo-video video');
    video.get(0).play();
    video.attr('controls', true);
    $('.demo-video .play').hide();
  });

  /*-----------------------------------
   * NAVBAR CLOSE ON CLICK
   *-----------------------------------*/

  $('.navbar-nav > li:not(.dropdown) > a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
  });



  /*-----------------------------------
   * ONE PAGE NAV - SMOOTH SCROLLING
   *-----------------------------------*/

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 40
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

  /*-----------------------------------
   * Twitter Widget
   *-----------------------------------*/
  window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));

});
/*End Fn*/