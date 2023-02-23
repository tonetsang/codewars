function rakeGarden(garden) {
  return garden.split(' ').map(x => x == 'rock' ? 'rock' : 'gravel').join(' ')
}