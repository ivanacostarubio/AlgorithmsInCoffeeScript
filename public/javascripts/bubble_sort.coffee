#
# A Naive implementation of the Bubble Sort Algorithm
#
# Ivan Acosta-Rubio
# @ivanacostarubio
#

class Bubble
   @sort: (s)->

     while swapped != false
       swapped = false
       i = 1
       while i < s.length
        if s[i - 1] > s[i]
           [ s[i], s[i - 1]] = [s[i - 1] , s[i]]
           swapped = true
         i = i + 1

     s



window.Bubble = Bubble
