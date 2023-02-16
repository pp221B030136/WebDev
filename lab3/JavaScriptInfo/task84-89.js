//1
// WeakSet

//2
//WeakMap

//3
function sumSalaries(salaries) {
    let sum = 0;

    for (let salary of Object.values(salaries)){
        sum += salary;
    }

    return sum;
}

//4
function count(obj) {
    return Object.keys(obj).length;
}

//5
let {name, years: age, isAdmin = false} = user;

//6
function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for (const[name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary){
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}