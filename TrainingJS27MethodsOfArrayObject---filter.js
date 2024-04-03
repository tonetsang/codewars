function countGrade(scores){
    let grades = { S : 0, A : 0, B : 0, C : 0, D : 0, X : 0 }
    for(let i = 0; i < scores.length; i++){
      scores[i] == 100                    ?  grades['S']++ : 
      scores[i] <  100 && scores[i] >= 90 ?  grades['A']++ :
      scores[i] <  90  && scores[i] >= 80 ?  grades['B']++ :
      scores[i] <  80  && scores[i] >= 60 ?  grades['C']++ :
      scores[i] <  60  && scores[i] >= 0  ?  grades['D']++ :
      scores[i] == -1                     ?  grades['X']++ : 
                              'butts'  
    }
    return grades
  }