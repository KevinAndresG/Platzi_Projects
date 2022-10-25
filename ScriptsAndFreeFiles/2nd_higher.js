#!/usr/bin/node
function second_higher(array) {
  let sorted = array.sort(function (a, b) { return a - b })
  let position = sorted.length - 2
  while (sorted[position] >= sorted[position + 1]) {
    position--
  }
  console.log(sorted)
  console.log(sorted[position])
}
second_higher([2, 4, 6, 3, 1, 8, 10, 15, 20, 20, 20, 30])
