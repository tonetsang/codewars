function decodeResistorColors(bands) {
    bands = bands.split(' ')
    let convert = { black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9 }
    let value = bands.slice(0, 2).map(x => convert[x]).join('')
    value *= Math.pow(10, convert[bands[2]])
    let tolerance = !bands[3] ? '20%' : bands[3] == 'gold' ? '5%' : "10%"
    return  value < 1000 ?    `${value} ohms, ${tolerance}` : 
            value < 1000000 ? `${value / 1000}k ohms, ${tolerance}` : 
                              `${value / 1000000}M ohms, ${tolerance}`
  }