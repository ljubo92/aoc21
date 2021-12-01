const data = require("fs").readFileSync("day1.txt", "utf8");

const a =
    data.split(/\n/g)
        .map(x => parseInt(x))
        .reduce((prev, _, i, arr) => arr[i] < arr[i+1] ? prev + 1 : prev, 0)

console.log(a);


const b =
    data.split(/\n/g)
        .map(x => parseInt(x))
        .reduce((prev, _, i, arr) => arr[i] + arr[i+1] + arr[i+2] < arr[i+1] + arr[i+2] + arr[i+3] ? prev + 1 : prev, 0)

console.log(b);
