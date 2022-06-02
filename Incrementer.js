function incrementer(nums) { 
    return nums.map((x, y) => (x + y + 1) % 10)
  }