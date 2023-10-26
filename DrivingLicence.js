function driver(data) {
    let surname = data[2].toUpperCase().slice(0, 5)
    if(surname.length < 5) surname = surname.padEnd(5, 9).toUpperCase()
    
    let decade = data[3].slice(-2)[0]
    let birthMonth = `0${new Date(data[3]).getMonth() + 1 + (data[4] == 'F' ? 50 : 0)}`.slice(-2)
    let birthDate = data[3].slice(0, 2)
    let birthYear = data[3].slice(-1)
    let init = `${data[0][0] || ''}${data[1][0] || ''}99`.slice(0, 2)
    
    return `${surname}${decade}${birthMonth}${birthDate}${birthYear}${init}9AA`
  }