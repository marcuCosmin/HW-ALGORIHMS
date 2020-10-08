function reverseString(str) {

    if (typeof str === 'string') {

      let string = str;
  
      for (let index = string.length - 1; index >= 0; index--) {
        
        str += string[index];
        str = str.substring(1);
      }
    }
    return str;
  }
  
  reverseString("hello");