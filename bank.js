"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// We define our user interface in Node
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
main();
function main() {
    rl.question("Input your name", function (answer) {
        if (answer === 'q') {
            exit();
        }
        else {
            console.log(answer);
            main();
        }
    });
}
function exit() {
    rl.close();
    process.exit();
}
