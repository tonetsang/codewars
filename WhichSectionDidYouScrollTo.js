// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
function getSectionIdFromScroll(scrollY,sizes){
    let sum = 0
    for(let i = 0; i < sizes.length; i++){
      if(sum - 1 >= scrollY) return i - 1
      else sum += sizes[i]  
      if(sum - 1 >= scrollY) return i
    }
    return -1
  }