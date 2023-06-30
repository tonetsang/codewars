function myParseInt(str) {
    return str.trim().match(/[\D]/) ? NaN : parseInt(str)
}