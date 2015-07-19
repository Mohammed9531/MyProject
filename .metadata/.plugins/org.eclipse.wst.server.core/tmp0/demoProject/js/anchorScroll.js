/**
 * author : mshoukath
 * date	  : 07/09/2015
 * time	  : 1:45 pm est
 * created with eclipse luna
 */

app.run(function($anchorScroll, $window) {
  // hack to scroll to top when navigating to new URLS but not back/forward
  var wrap = function(method) {
    var orig = $window.window.history[method];
    $window.window.history[method] = function() {
      var retval = orig.apply(this, Array.prototype.slice.call(arguments));
      $anchorScroll();
      return retval;
    };
  };
  wrap('pushState');
  wrap('replaceState');
})