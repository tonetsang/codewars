function isDivisible(first, ...rest){
    return rest.every(x => first % x == 0)
}