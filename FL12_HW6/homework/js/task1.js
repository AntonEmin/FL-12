const four = 4, two = 2, ten = 10;
let x1 = 0, x2 = 0;
let a = Number.parseInt(prompt('Enter your a for quadratic equation (ax2 + bx + c = 0).'));
let b = Number.parseInt(prompt('Enter your b for quadratic equation (ax2 + bx + c = 0).'));
let c = Number.parseInt(prompt('Enter your c for quadratic equation (ax2 + bx + c = 0).'));
if (isNaN(a)||isNaN(b)||isNaN(c)) {
    alert('Invalid input data!!!');
} else {
    let disc = Math.pow(b, two) - four * a * c;
    if (disc > 0) {
        x1 = (-b + Math.sqrt(disc)) / (two * a);
        x2 = (-b - Math.sqrt(disc)) / (two * a);
        console.log('x1 = ' + x1 + ' x2 = ' + x2)
    } else if (disc === 0) {
        x1 = -b / (two * a) ;
        console.log('x1 =' + x1)
    } else {
        console.log('No solution!')
    } 
}


