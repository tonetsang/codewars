function warnTheSheep(queue) {
    return queue.indexOf('wolf') + 1 != queue.length ? `Oi! Sheep number ${((queue.indexOf('wolf') + 1) - queue.length) * -1}! You are about to be eaten by a wolf!` : 'Pls go away and stop eating my sheep'
  }