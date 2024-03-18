function List(){
    this.countSpecDigits=function(integersList, digitsList){
      let arr = []
      for(let i = 0; i < digitsList.length; i++){
        arr.push([digitsList[i], integersList.join().split(digitsList[i]).length -1])
      }
      return arr
    }
  }