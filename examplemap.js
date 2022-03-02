#!/usr/bin/node
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

let i = arr.map(function (element, index) {
  console.log('this is the index ' + index);
  console.log(element)
})
