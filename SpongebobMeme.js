function spongeMeme(sentence) {
    let meme = ''
    for(let x in sentence.split('')) {
      x % 2 == 0 ? meme = meme + sentence[x].toUpperCase() : meme = meme + sentence[x].toLowerCase()
    }
    return meme
}