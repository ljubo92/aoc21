const data = require("fs").readFileSync("input.txt", "utf8");
const transformedData = data.split(/\n/g).map(x => x.split(""))

//Part 1
const scores = Array(transformedData[0].length).fill(0)

for(let i = 0; i < transformedData.length; i++){
    for(let j = 0; j < transformedData[0].length; j++){
        if(transformedData[i][j] === '1') 
        scores[j] = scores[j] + 1;
    }
}

const gammaRate = scores.map(x => x > (transformedData.length / 2) ? 1 : 0).join("");
const betaRate = [...gammaRate].map(x => x === '1' ? 0 : 1).join("");

console.log("Part1:", parseInt(gammaRate, 2) * parseInt(betaRate, 2))


//Part 2
const filterRows = (rows, position, gasType) => {
    if(!rows || rows && rows.length === 1) return rows;
  
    let score = 0;
    
    for(let i = 0; i < rows.length; i++){
        rows[i][position] === '1' ? score++ : score;
    }
    majorityNumber = score >= (rows.length/2) ? 1 : 0;
    minorityNumber = 1 - majorityNumber;
    return rows.filter(x => parseInt(x[position]) ===  (gasType === "oxygen" ? majorityNumber : minorityNumber));
}

const oxygenRating = scores.reduce((acc, _, i) => filterRows(acc,i, "oxygen"), transformedData).flat().join("")
const co2Rating = scores.reduce((acc, _, i) => filterRows(acc,i, "h2o"), transformedData).flat().join("")

console.log("Part2:", parseInt(oxygenRating, 2) * parseInt(co2Rating, 2));
