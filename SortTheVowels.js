function sortVowels(s){
    if(s == undefined || s == Number(s)){
    return '' 
    }else{
      return s.split('').map(a => {if(a.toLowerCase() == 'a' || a.toLowerCase() == 'e' || a.toLowerCase() == 'i' || a.toLowerCase() == 'o' || a.toLowerCase() == 'u'){
                                  return `|${a}`
                                }else {
                                  return `${a}|`
                                } 
                                }).join('\n')
    }
  }