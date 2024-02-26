function encryption(message) {
    return message.split('').map(x => CHAR_TO_MORSE[x] || x).join(' ')
  }