const cowsay = require('cowsay')
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

console.log(chalk.yellow(cowsay.say({
    text : 'Codecamp15 narak mak mak',
    e: '- O',
    T: 'U',
    r : false
})))



