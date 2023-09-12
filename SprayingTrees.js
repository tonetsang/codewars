function task(w, n, c) {
  return `It is ${w} today, ${w == 'Wednesday' ? 'Robert' :
    w == 'Monday' ? 'James' :
    w == 'Friday' ? 'William' :
    w == 'Tuesday' ? 'John' : 'Michael'
  }, you have to work, you must spray ${n} trees and you need ${n * c} dollars to buy liquid`
}