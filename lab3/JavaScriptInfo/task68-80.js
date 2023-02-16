//1
function camelize(str) {
    return str.split('-').map( (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join("");
}

//2
function filterRange(arr, a, b) {
    return arr.filter( item => (a <= item && b >= item));
}

//3
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++){
        let x = arr[i];
        if (x < a || x > b){
            arr.splice(i, 1);
            i--;
        }
    }
}

//4
arr.sort( (a, b ) => b - a);

//5
function copySorted(arr){
    return arr.slice().sort();
}

//6
function Calculator(){

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

//7
let names = users.map(item => item.name);

//8
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

//9
function sortByAge(users){
    arr.sort((a, b) => a.age - b.age);
}

//10
function shuffle(array){
    array.sort(() => Math.random() - 0.5);
}

//11
function getAverageAge(users){
    return users.reduce((prev, user) => prev + user.age, 0) / user.length;
}

//12
function unique(arr){
    let result = [];

    for (let x of arr) {
        if (!result.includes(x)){
            result.push(x);
        }
    }

    return result;
}

//13
function groupById(arr){
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}