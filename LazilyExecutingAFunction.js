function makeLazy (fn) {
	return fn.bind.apply(fn, arguments)
}