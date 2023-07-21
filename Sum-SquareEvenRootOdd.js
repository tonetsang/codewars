const sumSquareEvenRootOdd = ns => {
  return +ns.map(x => 
    {if(x % 2 === 0) return x**2 
      else return x**0.5
    })
  .reduce((a, b) => a + b).toFixed(2)
};