function add(...args) {
    return args.reduce((a, c, i) => a + (c * (i + 1)), 0)
}