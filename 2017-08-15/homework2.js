var weapons = ['rock', 'paper', 'scissors'];

var player1Score = 0;
var player2Score = 0;

var winConditions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
}

while (player1Score !== 3 && player2Score !== 3) {
    console.log("Game Start")
    var player1Weapon = weapons[parseInt(Math.random() * weapons.length) % 3];
    var player2Weapon = weapons[parseInt(Math.random() * weapons.length) % 3];

    console.log(player1Weapon, player2Weapon)

    if (player1Weapon === player2Weapon) {
        console.log('Tie')
    } else {
        if (winConditions[player2Weapon] === player1Weapon) {
            console.log('Player 2')
            player2Score += 1;
        } else {
            console.log('Player 1')
            player1Score += 1;
        }
    }       
}

console.log(player1Score === 3 ? "Player 1 Wins Match":  "Player 2 Wins Match")

// if (player1Score === 3) {
//     console.log("Player 1 Wins Match")
// } else {
//     console.log("Player 2 Wins Match")
// }