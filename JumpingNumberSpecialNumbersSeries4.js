function jumpingNumber(n){
    return String(n).split('').every((e, i, a) => i < 1 || Math.abs(e - a[i - 1]) == 1) ? 'Jumping!!' : 'Not!!'
  }