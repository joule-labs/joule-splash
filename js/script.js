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
    installUrl = 'https://chrome.google.com/webstore/detail/joule/aejmoogjdllanidlpfjmmmmimfaficio';
  }
  else if (navigator.userAgent.search("Firefox") >= 0) {
    browser = 'firefox';
    // TODO: Update with Firefox extension store URL.
    installUrl = 'https://addons.mozilla.org/en-US/firefox/addon/lightning-joule/';
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
});
/*End Fn*/