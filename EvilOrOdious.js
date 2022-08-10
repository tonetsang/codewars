function evil(n) {
    return (n >>> 0).toString(2).split('').filter(x => x == 1).length % 2 ? 'It\'s Odious!' : 'It\'s Evil!'
}