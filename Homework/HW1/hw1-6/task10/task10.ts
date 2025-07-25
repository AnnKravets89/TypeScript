type CardType = {
    cardSuit: string,
    cardValue: string,
    color?: string
}
const cards: CardType[] = [];

const cardSuits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (let suit of cardSuits) {
    for (let value of cardValues) {
        const card: CardType = {cardSuit: suit, cardValue: value}
        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

console.log(cards.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace'));
console.log(cards.filter(card => card.cardValue === '6'));
console.log(cards.filter(card => card.color === 'red'));
console.log(cards.filter(card => card.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' &&
    (card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8' && card.cardValue !== '9')));
