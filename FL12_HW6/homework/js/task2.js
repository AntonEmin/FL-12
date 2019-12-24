let a = Number.parseInt(prompt('Enter your a for triangle sides length.'));
let b = Number.parseInt(prompt('Enter your b for triangle sides length.'));
let c = Number.parseInt(prompt('Enter your c for triangle sides length.'));

if (isNaN(a) || isNaN(b) || isNaN(c) || a < 0 || b < 0 || c < 0) {
    alert('Input values should be ONLY positive NUMBERS !!!');
} else {
    if (a + b <= c || a + c <= b || c + b <= a) {
        console.log('Triangle doesn’t exist');
    }else { 
        if (a === b === c) {
            console.log('Equivalent triangle');
        }else if (a === b && b !== c || b === c && b !== a || a === c && a !== b) {
            console.log('Isosceles triangle');
        }else {
            console.log('Normal triangle');
        }
    }
}