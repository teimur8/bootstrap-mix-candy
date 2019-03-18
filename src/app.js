require("babel-polyfill");
window.$ = window.jQuery = require("jquery");
import "bootstrap";

$(function() {
  $(document).scroll(function() {
    var $nav = $("#mainNavbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
