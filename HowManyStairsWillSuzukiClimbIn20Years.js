function stairsIn20(s){
    return (s[0].reduce((a,b)=>a+b) + s[1].reduce((a,b)=>a+b) + s[2].reduce((a,b)=>a+b) + s[3].reduce((a,b)=>a+b) +
            s[4].reduce((a,b)=>a+b) + s[5].reduce((a,b)=>a+b) + s[6].reduce((a,b)=>a+b)) * 20
  }