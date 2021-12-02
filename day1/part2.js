const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "input.txt"))
});


const batch = 3;
let totalIncreases = 0;
let lastSum = 0;
let lineNumber = 0;
let depthArray = Array(3);
rl.on("line", (row) => {
    depthArray[lineNumber % batch] = Number(row);
    if (lineNumber >= batch) {
        const batchSum = depthArray.reduce((a, b) => a + b, 0);
        if (lastSum && lastSum < batchSum) {
            totalIncreases++ ;
        }
        lastSum = batchSum;
    }
    lineNumber++ ;
});

rl.on("close", () => console.log(totalIncreases + 1));