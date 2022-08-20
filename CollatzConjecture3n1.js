var hotpo = function(n,){
    if(n == 0) return 0; //Optional Handler to n = 0
    return n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1
  }