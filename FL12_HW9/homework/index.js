const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
],
 date = new Date(2019, 0, 2);  
function convert(...theArgs) {
  let result = [];
  for (let i = 0; i < theArgs.length; i++){
    if (typeof theArgs[i] === 'number') {
      result.push(theArgs[i]+'');
    } else {
    result.push(+ theArgs[i]);
    }
  }
  return result;
}

function executeforEach (array, callback) {    
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

function mapArray (array, callback) {
  let result = [];
  executeforEach(array, function(el) {
    if (typeof el === 'string') {
      el = + el;
    }
    result.push(callback(el));
  });   
  return result;
}

function filterArray (array, callback) {
  let result = [];
  executeforEach(array, function(el) {
    if (callback(el)) {
      result.push(el);
    }        
  });   
  return result;
}

function flipOver (str) {
  let flipedStr = '';
  for (let character of str) {
    flipedStr = character + flipedStr;
  }
  return flipedStr;
}

function makeListFromRange (array) {
  let result = [];
  for (let i = array[0]; i < array[1]+1;i++) {
    result.push(i);
  }
  return result;
}

function getArrayOfKeys (actors, key) {
  let result = [];
  executeforEach(actors, function(el) {
    result.push(el[key]); 
  })
  return result;
}

function substitute (array) {
  return mapArray(array, function(el) {
    if (el < 30) {
       return '*';
    } else {
        return el;
    }
  })
}

function getPastDay (date, days) {
  return new Date(new Date().setDate(date.getDate() - days));
}
