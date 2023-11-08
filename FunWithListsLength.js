function length(head) {
    let temp = head
    let count = 0
    while(temp != null){
      count++
      temp = temp.next
    }
    return count
  }