function remove (string) {
    return string.replace(/\b!+\B/g, '')
}