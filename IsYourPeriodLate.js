function periodIsLate(last, today, cycleLength) {
    return new Date(today.getTime() - last.getTime()) / 86400000 > cycleLength
  }