function findLongestWordLength(str) {

    if (typeof str === 'string' && str.length > 0) {

        let longestStr = "";  
        let constructedStr = "";
  
        for (let index = 0; index < str.length; index ++) {

        if (str[index] === " " || index == str.length - 1) {

            if (index == str.length - 1) {

                constructedStr += str[index]
            }

            if (constructedStr.length > longestStr.length) {
                longestStr = constructedStr;
                constructedStr = "";
            } else {
                constructedStr = "";
            }

        } else {

            constructedStr += str[index];
        }
        }

    return longestStr.length;

    }
}

findLongestWordLength("Theeeeeeeeeeeeee quick brown fox jumped over the lazy dog");