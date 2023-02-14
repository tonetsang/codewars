function getNiceNames(people){
  return people.filter(x => x.wasNice).map(y => y.name)
}

function getNaughtyNames(people){
  return people.filter(x => !x.wasNice).map(y => y.name)
}