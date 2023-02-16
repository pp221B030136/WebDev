//1
let a = +prompt("Enter the first number:", "");
let b = +prompt("Enter the second number:", "");
alert( a + b );

//2
//That happens because of the precision loss.
//We can fix that by multiplying and dividing it by 10:
alert( Math.round(6.35 * 10) / 10 );

//3
function readNumber() {
    let number;

    do {
        number = +prompt("Enter a number:", "");
    } while ( !isFinite(number) );

    if (number === null || number === '') {
        return null;
    }

    return number;
}

//4
//because of the precision loss

//5
function random(min, max) {
    return min + Math.random() * (max - min);
}

//6
function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
