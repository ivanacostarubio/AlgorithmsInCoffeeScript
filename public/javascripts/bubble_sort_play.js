(function() {
  var BubblePlay, Grapher;

  BubblePlay = (function() {

    function BubblePlay() {}

    BubblePlay.sort = function(s) {
      var i, steps, swapped, _ref;
      steps = [];
      while (swapped !== false) {
        swapped = false;
        i = 1;
        while (i < s.length) {
          steps.push(s.slice(0));
          if (s[i - 1] > s[i]) {
            _ref = [s[i - 1], s[i]], s[i] = _ref[0], s[i - 1] = _ref[1];
            swapped = true;
          }
          i = i + 1;
        }
      }
      return steps;
    };

    return BubblePlay;

  })();

  Grapher = (function() {

    function Grapher() {}

    Grapher.fadeThemout = function(children) {
      var currentChild;
      if (children.length > 0) {
        currentChild = children.shift();
        return $(currentChild).fadeIn(100, function() {
          Grapher.fadeThemout(children);
          if (children.length > 1) {
            return Grapher.face(currentChild);
          }
        });
      }
    };

    Grapher.face = function(ccc) {
      return $(ccc).hide();
    };

    Grapher.randomColor = function() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    Grapher.paint = function(rrr) {
      var r, _i, _len, _results;
      $('.results').append('<div class="r" style="display: none;"></div>');
      _results = [];
      for (_i = 0, _len = rrr.length; _i < _len; _i++) {
        r = rrr[_i];
        _results.push($('.r:last').append("<div class='barras' style='float: left; height: " + (r * 10) + "px'>" + r + "</div>"));
      }
      return _results;
    };

    return Grapher;

  })();

  $(function() {
    return $(".play").click(function() {
      var aa, children, input_array, r, raw_array, raw_input, result, _i, _len;
      $(".results").slideToggle(100);
      $(".results").html("");
      raw_input = $(".example_input").attr("value");
      raw_array = raw_input.split(",");
      input_array = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = raw_array.length; _i < _len; _i++) {
          aa = raw_array[_i];
          _results.push(parseInt(aa));
        }
        return _results;
      })();
      result = BubblePlay.sort(input_array);
      for (_i = 0, _len = result.length; _i < _len; _i++) {
        r = result[_i];
        Grapher.paint(r);
      }
      children = [];
      $(".results").children().each(function() {
        return children.push(this);
      });
      return Grapher.fadeThemout(children);
    });
  });

  window.Grapher = Grapher;

  window.BubblePlay = BubblePlay;

}).call(this);
