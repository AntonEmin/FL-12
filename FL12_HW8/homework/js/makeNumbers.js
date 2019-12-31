function makeNumber (a) {
  let b ='';
  a.split('').forEach(element => {         
    if (!isNaN(parseInt(element,10))) {
      b += element;
    }
  })    
  return b;
}
makeNumber('da21fe3');
