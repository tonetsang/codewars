//returns the test score
function scoreTest(str, right, omit, wrong){
    return str.map(x => x == 0 ? right : x == 1 ? omit : -wrong).reduce((a, b) => a + b)
  }