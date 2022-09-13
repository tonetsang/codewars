function magNumber(info){
    let bulletsFired = info[1] * 3
    return info[0] == 'PT92' ? Math.ceil(bulletsFired / 17) : 
          info[0] == 'M4A1' ? Math.ceil(bulletsFired / 30) : 
          info[0] == 'M16A2' ? Math.ceil(bulletsFired / 30) : 
                              Math.ceil(bulletsFired / 5)
  }