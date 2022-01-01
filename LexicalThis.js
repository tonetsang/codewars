var Person = function(){
    var person = {
      _name: "Leroy",
      _friends: [],
      fillFriends(f) {
        f.forEach(x => this._friends.push(x))
      }
    }
    return person;
  }