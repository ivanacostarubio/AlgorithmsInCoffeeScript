(function() {

  describe('Bubble Sort', function() {
    it('throws an error for invalid input | needs an array of integers');
    it('[2,1]', function() {
      var sorted;
      sorted = Bubble.sort([2, 1]);
      return expect(sorted).toEqual([1, 2]);
    });
    it('[3,2,1]', function() {
      var sorted;
      sorted = Bubble.sort([3, 2, 1]);
      return expect(sorted).toEqual([1, 2, 3]);
    });
    it("[4,2,3,1]", function() {
      var sorted;
      sorted = Bubble.sort([4, 2, 3, 1]);
      return expect(sorted).toEqual([1, 2, 3, 4]);
    });
    return it("[5,1,4,2,8]", function() {
      var sorted;
      sorted = Bubble.sort([5, 1, 4, 2, 8]);
      return expect(sorted).toEqual([1, 2, 4, 5, 8]);
    });
  });

}).call(this);
