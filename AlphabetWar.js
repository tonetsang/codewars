function alphabetWar(fight){  
    const dictL = {w:4,p:3,b:2,s:1}, dictR={m:4,q:3,d:2,z:1}
    const arr = fight.split('')
    const left = arr.filter(v => v.match(/[wpbs]/g)).map(v => dictL[v]).reduce((a,b) => a + b, 0)
    const right = arr.filter(v => v.match(/[mqdz]/g)).map(v => dictR[v]).reduce((a,b) => a + b, 0)
    return left > right ? "Left side wins!" : left < right ? "Right side wins!" : "Let's fight again!"
  }