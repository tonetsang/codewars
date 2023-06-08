var OrderPeople = function(people){
  return people.sort((x, y) => parseFloat(x.age) - parseFloat(y.age)); //complete this function
}