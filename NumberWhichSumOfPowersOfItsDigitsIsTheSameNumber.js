const eqSumPowdig = (hMax, exp) => {
    const res = [];
    for (let i = 2; i <= hMax; ++i) {
      const sum = [...i+''].reduce((a, b) => a + (+b) ** exp, 0);
      if (sum === i) res.push(i);
    }
    return res;
  };