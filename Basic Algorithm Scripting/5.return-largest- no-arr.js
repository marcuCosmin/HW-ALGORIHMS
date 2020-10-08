function largestOfFour(array) {

    let toBeReturned = [];
  
    
    for (let arr of array) {
        
        let maxOfa = arr[0];

        for (let a of arr) {
  
        if (a > maxOfa) {
  
          maxOfa = a;

          console.log(maxOfa);
        }
        
        }
    toBeReturned.push(maxOfa);
    }
  
    return toBeReturned;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  