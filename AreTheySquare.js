var isSquare = function(arr){
    return arr.length == 0 ? undefined : arr.every(x => Math.sqrt(x).toString().length <= x.toString().length)
}