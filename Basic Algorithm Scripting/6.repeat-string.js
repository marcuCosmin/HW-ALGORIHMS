function repeatStringNumTimes(str, num) {

    if (typeof str === 'string') {
        
        let string = "";
        
        for (let i = 0; i < num; i ++) {
            
            string += str;
        }
        
        return string;
    }
}
  
repeatStringNumTimes("abc", 3);
  