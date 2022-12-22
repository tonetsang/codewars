function countArara(n) {
  return (Array(Math.floor(n / 2) + 1).join('adak ') + Array(Math.floor(n % 2) + 1).join('anane ')).slice(0, -1)
}