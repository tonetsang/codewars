// Return an array
function fizzbuzz(n)
{
  let arr = []
  for(let i = 1; i <= n; i++){
    if(i % 3 !== 0 && i % 5 !== 0) arr.push(i)
    if(i % 3 == 0 && i % 5 == 0) arr.push('FizzBuzz')
    if(i % 3 == 0 && i % 5 !== 0) arr.push('Fizz')
    if(i % 5 == 0 && i % 3 !== 0) arr.push('Buzz')
  }
  return arr
}