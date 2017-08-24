var hands = ['rock', 'paper', 'scissor'];
var player1 = { name: 'Ruben', getHand: getHand };
var player2 = { name: 'David', getHand: getHand };

var winConditions = {
  rock: 'scissor',
  scissors: 'paper',
  paper: 'rock',
};

function getHand() {
  return hands[parseInt(Math.random() * 10) % 3];
}

function playRound(player1, player2) {
  var player1Weapon = player1.getHand();
  var player2Weapon = player2.getHand();

  if (player1Weapon === player2Weapon) {
    return null;
  } else {
    if (winConditions[player1Weapon] === player2Weapon) {
      console.log(player1Weapon+"\t"+player2Weapon+"\t:"+player1.name);
      return player1;
    } else {
      console.log(player1Weapon+"\t"+player2Weapon+"\t:"+player2.name);
      return player2;
    }
  }
}

function playGame(player1, player2, playUntil) {
  var player1Score = 0;
  var player2Score = 0;
  while (player1Score < playUntil && player2Score < playUntil) {
    var winner = playRound(player1, player2);
    if (winner !== null) {
      if (winner.name === player1.name) {
        player1Score += 1;
      } else if (winner.name === player2.name){
        player2Score += 1;
      }
      // console.log(winner.name);
    }
  }
  if (player1Score === playUntil) {
    return player1;
  } else if (player2Score) {
    return player2;
  }
}

var gameWinner = playGame(player1, player2, 3);
console.log('==> Winner of the game:', gameWinner.name);
