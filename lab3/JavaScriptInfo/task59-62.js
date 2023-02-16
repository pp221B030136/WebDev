// 1
function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}

//2
function checkSpam(str){
    let lowStr = str.toLowerCase();
    return lowStr.includes("viagra") || lowStr.includes("xxx");
}

//3
function truncate(str, maxlength) {
    if (str.length > maxlength){
        return str.slice(0, maxlength - 1) + "...";
    }
    return str;
}

//4
function extractCurrencyValue(str){
    return +str.slice(1);
}