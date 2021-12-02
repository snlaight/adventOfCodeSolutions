const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: fs.createReadStream(path.join(__dirname, "input.txt")),
    crlfDelay: Infinity
});

let totalHorizontal = 0;
let totalDepth= 0;
const forward = 'forward'
const down = 'down'
const up = 'up'
let currentResult = 0;

rl.on("line", (row)=> {
  const splitRow = row.split(/(\s+)/)
  const number = Number(splitRow[2])


  if(row.includes(forward)){
    totalHorizontal += number
  }
  if(row.includes(down)){
    totalDepth += number
  }
  if(row.includes(up)){
    totalDepth -= number
  }

  
 let result = totalDepth * totalHorizontal
 currentResult = result
})


rl.on("close", ()=> console.log(currentResult))