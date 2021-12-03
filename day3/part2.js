let fs = require("fs");

let inputFile = `input.txt`;
let input = fs.readFileSync(inputFile, "utf8");


let data = input.split(/\r?\n/);
let oxygenGenerator = data;

for (let i = 0; i < oxygenGenerator[0].length; i++) {
    if (oxygenGenerator.length == 1) break;
    let count1 = 0,
        count0 = 0;

    for (let j = 0; j < oxygenGenerator.length; j++) {
        let bit = oxygenGenerator[j][i];

        if (bit == "1") {
            count1++;
        } else {
            count0++;
        }
    }

    if (count1 > count0 || count1 == count0) {
        oxygenGenerator = oxygenGenerator.filter((item) => item[i] == "1");
    } else {
        oxygenGenerator = oxygenGenerator.filter((item) => item[i] == "0");
    }
}

let dioxideScrubber = data;

for (let i = 0; i < dioxideScrubber[0].length; i++) {
    if (dioxideScrubber.length == 1) break;
    let count1 = 0,
        count0 = 0;

    for (let j = 0; j < dioxideScrubber.length; j++) {
        let bit = dioxideScrubber[j][i];

        if (bit == "1") {
            count1++;
        } else {
            count0++;
        }
    }

    if (count1 > count0 || count1 == count0) {
        dioxideScrubber = dioxideScrubber.filter((item) => item[i] == "0");
    } else {
        dioxideScrubber = dioxideScrubber.filter((item) => item[i] == "1");
    }
}

let oxygenGeneratorRating = parseInt(oxygenGenerator[0], 2);
let dioxideScrubberRating = parseInt(dioxideScrubber[0], 2);

console.log(oxygenGeneratorRating * dioxideScrubberRating);