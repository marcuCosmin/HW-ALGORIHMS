// Setup

var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
  }
};

// Only change code below this line

function updateRecords(object, id, prop, value) {

  if (prop !== 'tracks') {

    if (value !== "" && value !== undefined) {
      
      object[id][prop] = value;
      
    } else {

      delete object[id][prop];
    }

  } else {

    if (!(object[id].hasOwnProperty('tracks'))) {
      
      object[id][prop] = [];
  
      if (value !== "" && value !== undefined) {
  
        object[id][prop].push(value);
  
      }
      
    } else {
  
      if (value == "" || value == undefined) {
  
        delete object[id][prop];
  
      } else {
  
        object[id][prop].push(value);
      }
    }
  }

  return object;
}

updateRecords(collection, 1245, 'tracks', 'caca');