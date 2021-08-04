function checkExam(array1, array2) {
    const score = array2.reduce((total, ans, i) => {
      if (!ans) return total
      if (ans == array1[i]) return total + 4
      if (ans !== array1[i]) return total - 1
      return total
    }, 0)
    return score > 0 ? score : 0
  }