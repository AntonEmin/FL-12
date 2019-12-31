function makeNumber (string) {
  let number ='';
  string.split('').forEach(element => {         
    if (!isNaN(parseInt(element,10))) {
      number += element;
    }
  })    
  return number;
}
function countNumbers (string) {
  let numbers = makeNumber(string).split('');
  let ret = {};
  let len = numbers.length;
  while (len--) {
    ret[numbers[len]] = ret[numbers[len]] + 1 || 1;
  }
  return ret;    
}
countNumbers('da4d5ad54a6d4ada6wd89aw7da89as');