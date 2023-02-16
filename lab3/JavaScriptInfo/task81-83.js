//1
function unique(arr){
    return Array.from(new Set(arr));
}

//2
function aclean(arr){
    let map = new Map();

    for (let x of arr){
        let sorted = x.toLowerCase().split('').sort().join('');
        map.set(sorted, x);
    }

    return Array.from(map.values());
}

//3
//Because map.keys() returns an iterable, not an array
let keys = Array.from(map.keys());