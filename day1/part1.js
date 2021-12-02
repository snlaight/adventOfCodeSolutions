const path = require("path")
const fs = require("fs")
const readline = require('readline');

const rl = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "input.txt"))
});

let totalIncreases = 0;
let lastDepth = 0;
rl.on("line", (row) => {
    const currentDepth = Number(row);
    if (lastDepth && lastDepth < currentDepth) {
        totalIncreases++ ;
    }

    lastDepth = currentDepth;
});

rl.on("close", () => console.log(totalIncreases))
