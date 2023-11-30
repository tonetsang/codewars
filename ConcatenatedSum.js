/*
function :-checkConcatenatedSum
inputs:- integers representing orginal number and number of times each digit should be repeated
output:- true of concatenated sum gives orginal number else false


*/
function checkConcatenatedSum(og, n){
    og = Math.abs(og)
    return og.toString().split('').map(x => x.repeat(n) * 1).reduce((a, b) => a + b) == og
  }