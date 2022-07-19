function wallpaper(l, w, h) {
    return w * h * l == 0 ? numbers[0] : numbers[Math.ceil((l * h * 2 + w * h * 2) * 1.15 / 5.2)]
  }