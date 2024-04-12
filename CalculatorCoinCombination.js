function coinCombo (cents) {
	let coins = [0, 0, 0, 0]
  while(cents >= 25){
    coins[3]++
    cents -= 25
  }
  while(cents >= 10){
    coins[2]++
    cents -= 10
  }
  while(cents >= 5){
    coins[1]++
    cents -= 5
  }
  while(cents >= 1 ){
    coins[0]++
    cents -= 1
  }
  return coins
}