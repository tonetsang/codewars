var Singleton = function(){
    if(Singleton.instance) {
      return Singleton.instance
    }
    Singleton.instance = this
  };