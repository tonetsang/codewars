function toTime(seconds) {
    return `${Math.floor(seconds / 3600)} hour(s) and ${Math.floor(
      (seconds / 3600 - Math.floor(seconds / 3600)) * 60
    )} minute(s)`
  }