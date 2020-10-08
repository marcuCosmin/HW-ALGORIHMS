function titleCase(string) {

    let str = string.split(' ');

    string = '';
  
    for (let s of str) {

        if (s === str[str.length - 1]) {

            string += s[0].toUpperCase() + s.substring(1).toLowerCase();
        } else {

            string += s[0].toUpperCase() + s.substring(1).toLowerCase() + ' ';
        }
    }
  
    return string;
  }