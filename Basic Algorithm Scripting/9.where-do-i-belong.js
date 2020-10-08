function getIndexToIns(arr, num) {

    let index = 0;
  
    for (let a of arr) {
      if (num > a) {
        index ++;
      }
    }
    
    return index;
  }
  
  getIndexToIns([40, 60], 50);
  