const data = require("fs").readFileSync("day1.txt", "utf8");

const a =
    data.split(/\n/g)
        .map(x => parseInt(x))
        .reduce((acc, _, i, arr) => arr[i] < arr[i+1] ? acc + 1 : acc, 0)

console.log(a);


const b =
    data.split(/\n/g)
        .map(x => parseInt(x))
        .reduce((acc, _, i, arr) => arr[i] + arr[i+1] + arr[i+2] < arr[i+1] + arr[i+2] + arr[i+3] ? acc + 1 : acc, 0)

console.log(b);
