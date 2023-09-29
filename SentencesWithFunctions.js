function sentence(args){
    return args.length == 0 ? arguments.callee.caller.name + '.' : arguments.callee.caller.name + ' ' + args[0]
  }
  function Adam() { return sentence(arguments) }
  function has() { return sentence(arguments) }
  function a() { return sentence(arguments) }
  function dog() { return sentence(arguments) }
  function The() { return sentence(arguments) }
  function name() { return sentence(arguments) }
  function of() { return sentence(arguments) }
  function the() { return sentence(arguments) }
  function is() { return sentence(arguments) }
  function also() { return sentence(arguments) }