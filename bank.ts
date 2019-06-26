import { Account } from './account';
import { User } from './user';

// We define our user interface in Node
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

main();

function main() {
    rl.question("Input your name", (answer) => {
        if(answer === 'q') {
            exit();
        } else {
            console.log(answer);
            main();
        }
    })
}

function exit() {
    rl.close();
    process.exit();
}