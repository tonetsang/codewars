const isSortedAndHow = (array) => {
    const sortedArray = array.slice().sort((a, b) => a - b);
    
    if (JSON.stringify(sortedArray) === JSON.stringify(array)) {
      return 'yes, ascending';
    }
    if (JSON.stringify(sortedArray.reverse()) === JSON.stringify(array)) {
      return 'yes, descending';
    }
    
    return 'no';
  }