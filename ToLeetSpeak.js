function toLeetSpeak(str) {
    let leetSpeak = {
    A : '@',
    B : '8',
    C : '(',
    E : '3',
    G : '6',
    H : '#',
    I : '!',
    L : '1',
    O : '0',
    S : '$',
    T : '7',
    Z : '2'
    }
    return str.replace(/[ABCEGHILOSTZ]/g, x => leetSpeak[x])
  }