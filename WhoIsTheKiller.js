function killer(suspectInfo, dead) {
    for(let person in suspectInfo){
      let suspect = suspectInfo[person]
      let killer = dead.every((seen) => {
        return suspect.includes(seen)
      })
      if(killer) return person
    }
  }