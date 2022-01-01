function htmlspecialchars(formData) {
    return formData.split('').map
      (x => {
        if(x == '<'){return '&lt;'} 
        if(x == '>'){return '&gt;'} 
        if(x == '"'){return '&quot;'} 
        if(x == '&'){return '&amp;'} 
        if(x == x) {return x}
      }).join('')
  }