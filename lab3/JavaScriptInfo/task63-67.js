//1
//It is going to show 4

//2
let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1)/2)] = "Classics";
alert( styles.shift() );
styles.unshift("Rap", "Reggae");

//3
// a,b,function(){
//     alert(this);
// }

//4
function sumInput(){
    let nums = [];

    while (true) {
        let number = +prompt("Enter a number:", "");
        if (!isFinite(number) || number === "" || number === null){
            break;
        }
        nums.push(number);
    }

    let sum = 0;
    for (let x of nums){
        sum += x;
    }

    return sum;
}

//5
function getMaxSubSum(arr){
    let maxSum = 0;
    let partSum = 0;

    for (let x of arr){
        partSum += x;
        maxSum = Math.max(partSum, maxSum);
        if (partSum < maxSum){
            partSum = 0;
        }
    }
    return maxSum;
}