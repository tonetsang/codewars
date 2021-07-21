function removeDuplicateWords (s) {
    return s.split(' ').filter((item,index,arr) => (arr.indexOf(item) === index)).join(' ')
  }