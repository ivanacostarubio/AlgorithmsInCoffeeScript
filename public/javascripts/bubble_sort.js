(function() {
  var Bubble;

  Bubble = (function() {

    function Bubble() {}

    Bubble.sort = function(s) {
      var i, swapped, _ref;
      while (swapped !== false) {
        swapped = false;
        i = 1;
        while (i < s.length) {
          if (s[i - 1] > s[i]) {
            _ref = [s[i - 1], s[i]], s[i] = _ref[0], s[i - 1] = _ref[1];
            swapped = true;
          }
          i = i + 1;
        }
      }
      return s;
    };

    return Bubble;

  })();

  window.Bubble = Bubble;

}).call(this);
