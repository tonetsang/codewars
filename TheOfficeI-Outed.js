function outed(meet, boss){
    return (Object.values(meet).reduce((a, b) => a + b) + meet[boss]) / Object.values(meet).length > 5 ? 
      'Nice Work Champ!' : 'Get Out Now!'
  }