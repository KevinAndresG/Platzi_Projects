#!/usr/bin/node
function Average(values) {
  let allValues = 0;
  for (i in values) {
    allValues = values[i] + allValues
  }
  console.log(allValues / values.length)
}
Average([100, 200, 100, 300, 400])
