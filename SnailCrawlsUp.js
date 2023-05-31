function snail(column, day, night) {
  let count = 0
  let crawl = 0
  while(crawl <= column){
    count++
    crawl += day
    if(crawl >= column) break
    crawl -= night
  }
  return count
}