function getStrings(city){
    let arr = city.toLowerCase().split('').filter(x => x != ' ')
    let count = []
    let answer = []
    for(let y of arr){
      count[y] = (count[y] || 0) + 1
    }
    for(let letter in count){
      answer.push(letter + ":" + '*'.repeat(count[letter]))
    }
    return answer.join(',')
}