function goto(level,button){
    return typeof level == 'number' && typeof button == 'string' && 
      level >= 0 && level < 4 && button >= 0 && button < 4 && level != 1.5 ? 
      parseFloat(button) - level : 0
  }