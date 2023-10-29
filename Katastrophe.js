function strongEnough(earthquake, age) {
    let str =  1000 * Math.pow(.99, age)
    return str > earthquake.reduce((a, b) => a * b.reduce((c, d) => c + d), 1) ? 'Safe!' : 'Needs Reinforcement!'
  }