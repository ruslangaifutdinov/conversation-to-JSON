const fs = require("fs");
const { stringify } = require("querystring");

let inputFile = fs.readFileSync("./input/input.txt").toString().split("\n");
let arrayOutput = [];
const date = new Date();

for (let i = 0; i <= inputFile.length - 1; i++) {
  output = {
    mode: "SERIALIZATION",
    ki: `[${inputFile[i]}]`,
    date,
  };
  arrayOutput.push(output);
}

let mainJSON = {
  line: {
    name: "Test line",
    mode: "SERIALIZATION",
  },
  startTime: "2021-06-01T08:28:47.495Z",
  endTime: "2021-06-01T08:40:47.613Z",
  verifications: arrayOutput
};

const convert = JSON.stringify(mainJSON, null, 2);
fs.writeFileSync("./output/output.json", convert);
console.log(`Object written to file.`)