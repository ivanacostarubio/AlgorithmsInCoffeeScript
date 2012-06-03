
describe 'Bubble Sort', ->

  it '[2,1]', ->
    sorted = Bubble.sort([2,1])
    expect(sorted).toEqual([1,2])

  it '[3,2,1]', ->
    sorted = Bubble.sort([3,2,1])
    expect(sorted).toEqual([1,2,3])

  it "[4,2,3,1]", ->
    sorted = Bubble.sort([4,2,3,1])
    expect(sorted).toEqual([1,2,3,4])

  it "[5,1,4,2,8]", ->
    sorted = Bubble.sort([5,1,4,2,8])
    expect(sorted).toEqual([1,2,4,5,8])
