var Ghost = function() {
    let random = Math.ceil(Math.random() * 4);
    switch(random) {
      case 1:
        return this.color = "white";
      case 2:
        return this.color = "yellow";
      case 3:
        return this.color = "purple";
      case 4:
        return this.color = "red";
    }
  };