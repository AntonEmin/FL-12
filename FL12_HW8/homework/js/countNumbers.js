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
    let uniqNumbers = [],
        countUniqNumbers = [];
    
    for (let temp of numbers) {
        if(!uniqNumbers.includes(temp)){
            uniqNumbers.push(temp);
        }
    }
    for (let i = 0; i < uniqNumbers.length;i++) {
        for (let temp of numbers) {
            if (uniqNumbers[i] === temp) {
                countUniqNumbers[i] += 1;
            }
        }
    }
}