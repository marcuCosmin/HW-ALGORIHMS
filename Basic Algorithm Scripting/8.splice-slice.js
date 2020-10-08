function frankenSplice(arr1, arr2, n) {

    let returnedArr = arr2.slice();
  
    returnedArr.splice(n, 0, ...arr1)

    return returnedArr;
}
  
frankenSplice([1, 2, 3], [4, 5, 6], 1);
  