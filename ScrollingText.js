function scrollingText(text){
    text = text.toUpperCase()
    return text.split('').map((x, y) => text.slice(y) + text.slice(0, y))
}