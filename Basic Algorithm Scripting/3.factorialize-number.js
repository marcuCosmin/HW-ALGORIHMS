function factorialize(num) {
    
    if (Number.isInteger(num) && num >= 0) {
      
      let f = 1;
  
      for (let n = 2; n <= num; n++) {
  
        f = f * n;
  
      }
  
    return f;
    }
  }
  
  factorialize(5);