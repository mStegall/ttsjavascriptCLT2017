var hands = ['rock', 'paper', 'scissors'];

function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

var player1 = {
    name: "Mark",
    getHand: getHand
}

var player2 = {
    name: "Matt",
    getHand: getHand
}

var winConditions = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
}

function playRound(player1, player2) {
    console.log("Game Start")
    var player1Weapon = player1.getHand();
    var player2Weapon = player2.getHand();

    console.log(player1Weapon, player2Weapon)

    if (player1Weapon === player2Weapon) {
        console.log('Tie')
        return null;
    } else {
        if (winConditions[player2Weapon] === player1Weapon) {
            console.log('Player 2')
            return player2;
        } else {
            console.log('Player 1')
            return player1;
        }
    }
}

const roundWinner = playRound(player1, player2)

console.log(roundWinner && roundWinner.name)