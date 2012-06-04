
class BubblePlay
   @sort: (s)->


     steps = []
     while swapped != false
       swapped = false
       i = 1
       while i < s.length
         steps.push s.slice(0)

         if s[i - 1] > s[i]
           [ s[i], s[i - 1]] = [s[i - 1] , s[i]]
           swapped = true
         i = i + 1

     steps




class Grapher
  @fadeThemout: (children) ->
    if (children.length > 0)
      currentChild = children.shift()
      $(currentChild).fadeIn 100, ->
        Grapher.fadeThemout(children)
        Grapher.face(currentChild) if children.length > 1

  @face:(ccc) ->
    $(ccc).hide()

  @randomColor: ->
    '#'+Math.floor(Math.random()*16777215).toString(16)

  @paint: (rrr) ->

    $('.results').append('<div class="r" style="display: none;"></div>')
    for r in rrr
      $('.r:last').append("<div class='barras' style='float: left; height: #{r * 10}px'>#{r}</div>")

$ ->


  $(".play").click ->

    $(".results").slideToggle(100)
    $(".results").html("")
    raw_input = $(".example_input").attr("value")
    raw_array = raw_input.split(",")
    input_array = (parseInt(aa) for aa in raw_array)
    result = BubblePlay.sort(input_array)

    for r in result
      Grapher.paint(r)
    children= []

    $(".results").children().each ->
      children.push(this)

    Grapher.fadeThemout(children)





window.Grapher = Grapher
window.BubblePlay = BubblePlay
