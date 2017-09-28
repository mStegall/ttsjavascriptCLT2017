// Given an array of cards and a card to remove,
// return an array of the remaining cards.
const removeCard = (cards, card) => {
  const index = cards.indexOf(card);
  return index === -1
    ? cards
    : [...cards.slice(0, index), ...cards.slice(index + 1)];
};

const cards = ['10♣', '9♣', '5♣', '2♣'];
const card = '5♣';

console.log(removeCard(cards, card));
