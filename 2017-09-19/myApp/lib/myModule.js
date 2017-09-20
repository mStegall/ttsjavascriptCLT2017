var chalk = require("chalk")

var colors = [
    'black',
    'red',
    'green',
    'yellow',
    'blue',
    'magenta',
    'cyan',
    'white',
    'gray',
    'redBright',
    'greenBright',
    'yellowBright',
    'blueBright',
    'magentaBright',
    'cyanBright',
    'whiteBright'
]

function randomColorLog(message){
    var random = Math.floor(Math.random() * colors.length)
    
    var chalkFunction = chalk[colors[random]]

    console.log(chalkFunction(message));
}

exports = {
    randomColor: randomColorLog
}