var Calculator = {
    average: function() {
     return arguments.length == 0 ? 0 : [...arguments].reduce((a, b) => a + b) / arguments.length
    }
   };