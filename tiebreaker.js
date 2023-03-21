// First, we're using the fs (file system) module to read the contents of the input file into a string variable called input.
const fs = require('fs');

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];
// Next, we're splitting the input string into an array of strings using the newline character as the delimiter. 
// This gives us an array of strings, where each string represents a player's hand of cards.
try {
  const data = fs.readFileSync(inputFilePath, 'utf-8').split('\n');
// // We then initialize an empty array called players to hold the player objects that we will create in the following steps.
  const players = {};
// We loop through the array of hand strings, and for each hand, we use the split() method to separate the player name from the cards.
  for (let i = 0; i < data.length; i++) {
    const [player, cards] = data[i].split(':');
    players[player] = cards.trim().split(',');
  }
// We create a new object for each player, 
// with properties for their name and an array of card objects representing their hand.
  const scores = {};
  const suitScores = {};

  for (const player in players) {
    const cards = players[player];
    let score = 0;
    let suitScore = 0;

    for (let i = 0; i < cards.length; i++) {
      let cardScore;

      switch (cards[i][0]) {
        case 'A':
          cardScore = 11;
          break;
        case 'J':
        case 'Q':
        case 'K':
          cardScore = 10;
          break;
        default:
          cardScore = parseInt(cards[i][0]);
          break;
      }

      score += cardScore;

      switch (cards[i][1]) {
        case 'C':
          suitScore = Math.max(suitScore, 1);
          break;
        case 'D':
          suitScore = Math.max(suitScore, 2);
          break;
        case 'H':
          suitScore = Math.max(suitScore, 3);
          break;
        case 'S':
          suitScore = Math.max(suitScore, 4);
          break;
      }
    }

    scores[player] = score;
    suitScores[player] = suitScore;
  }

  let maxScore = -Infinity;
  let maxSuitScore = -Infinity;
  let winners = [];
// We sort the players array in descending order of score, 
// so that the player with the highest score is at the beginning of the array.
  for (const player in players) {
    if (scores[player] > maxScore) {
      maxScore = scores[player];
      maxSuitScore = suitScores[player];
      winners = [player];
    } else if (scores[player] === maxScore) {
      if (suitScores[player] > maxSuitScore) {
        maxSuitScore = suitScores[player];
      }

      if (suitScores[player] === maxSuitScore) {
        winners.push(player);
      }
    }
  }

  let result;
// We then check for ties by comparing the highest score to the second-highest score.
// If they are equal, we enter a tiebreaker loop where we calculate the suit score for each tied player and compare them to find the winner.
  if (winners.length === 1) {
    result = `${winners[0]}:${maxScore}${maxSuitScore === 0 ? '' : 'o'}`;
  } else {
    result = `${winners.join(',')}:${maxScore}${maxSuitScore === 0 ? '' : 'o'}`;
  }
// Once we have determined the winner or winners, 
// we format the output string according to the rules you specified, 
// and write it to the output file using the fs module.
  fs.writeFileSync(outputFilePath, result);
} catch (error) {
  const errorMessage = `Exception:${error.message}`;
  fs.writeFileSync(outputFilePath, errorMessage);
}
