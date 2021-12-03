let fs = require("fs");

let inputFile = `input.txt`;
let input = fs.readFileSync(inputFile, "utf8");
let data = input.split(/\r?\n/);

let gamma = "";
let epsilon = "";

for (let i = 0; i < data[0].length; i++) {
    let firstCount = 0,
        zeroCount = 0;

    for (let j = 0; j < data.length; j++) {
        let bit = data[j][i];

        if (bit == "1") {
            firstCount++;
        } else {
            zeroCount++;
        }
    }

    if (firstCount > zeroCount) {
        gamma += "1";
        epsilon += "0";
    } else {
        gamma += "0";
        epsilon += "1";
    }
}

gamma = parseInt(gamma, 2);
epsilon = parseInt(epsilon, 2);
console.log(gamma * epsilon);
