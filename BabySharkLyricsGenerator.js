function babySharkLyrics(){
    let fish = [`Baby shark`, `Mommy shark`, `Daddy shark`, `Grandma shark`, `Grandpa shark`, `Let's go hunt`],
    doo = ` doo`.repeat(6),
    lyrics = ''
    fish.map(x => lyrics += `${x},${doo}\n`.repeat(3) + `${x}!\n`)
    return lyrics + `Run away,…`
  }