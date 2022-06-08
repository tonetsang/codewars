var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      let arr = []
      for(let i = 0; i <= count; i++) {arr.push(i)}
      let nums = arr.join('+')
      let total = arr.reduce((a, b) => a + b, 0)
      if(count<0) return `${count}<0`
      if(count==0) return `${count}=0`
      return `${nums} = ${total}`  
      }
    
    return SequenceSum;
  
  })();