const data = require("fs").readFileSync("input.txt", "utf8");
const transformedData = data.split(/\n/g).map(x => x.split(" "))

// Part 1
const a = transformedData
    .reduce((acc, c) => c[0] === 'forward' ? { ...acc, x: acc.x + parseInt(c[1]) } : 
                        c[0] === 'down' ? { ...acc, y: acc.y + parseInt(c[1])} : 
                        c[0] === 'up' ? { ...acc, y: acc.y - parseInt(c[1])}
                        : acc
                        ,{ x: 0, y: 0 })

console.log(a, "ans:", a.x*a.y);  // { x: 1967, y: 1031 } ans: 2027977

// Part 2
const b = transformedData
    .reduce((acc, c) => c[0] === 'forward' ? { ...acc, x: acc.x + parseInt(c[1]), y: acc.y + parseInt(c[1]) * acc.aim } : 
                        c[0] === 'down' ? { ...acc, aim: acc.aim + parseInt(c[1])} : 
                        c[0] === 'up' ? { ...acc, aim: acc.aim - parseInt(c[1])}
                        : acc
                        ,{ x: 0, y: 0, aim: 0 })

console.log(b, "ans:", b.x*b.y);  // { x: 1967, y: 967791, aim: 1031 } ans: 1903644897
