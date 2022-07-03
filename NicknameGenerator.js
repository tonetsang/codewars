function nicknameGenerator(name){
    if( name.length < 4) return 'Error: Name too short'
    return name[2].match(/[aeiou]/) ? name.slice(0, 4) : name.slice(0, 3)
  }