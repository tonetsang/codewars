function sumNoDuplicates(numList) {
    return numList.filter(x => numList.indexOf(x) == numList.lastIndexOf(x)).reduce((a, b) => a + b, 0)
}