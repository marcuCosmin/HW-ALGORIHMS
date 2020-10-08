function steamrollArray(array) {
  
  let stringifiedArray = array.toString().split(',');

  array = stringifiedArray.map(function(element) {

    return element === '[object Object]' ? {} : isNaN(element) ? element : parseInt(element);
  });

  if (array.some(function(element) {
    
    return Object.is(element, NaN);
    
  })) {

  let nanIndex = array.findIndex(function(element) {
    
    return Object.is(element, NaN);
  });
    
  array.splice(nanIndex, 1);
  
  }

  return array;

}

console.log(steamrollArray([[["a"]], [["b"]]]));