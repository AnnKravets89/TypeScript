type Card611 = {
    cardSuit: string,
    cardValue: string,
    color?: string
}
const cards611: Card611[] = [];

const cardSuits611: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const cardValues611: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

for (let suit of cardSuits611) {
    for (let value of cardValues611) {
        const card: Card611 = {cardSuit: suit, cardValue: value}
        if (suit === 'diamond' || suit === 'heart') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards611.push(card);
    }
}
interface Accum {
    spades: Card611[],
    diamonds: Card611[],
    hearts: Card611[],
    clubs: Card611[]
}
let cards2: Accum = cards611.reduce((accumulator: Accum, card: Card611): Accum => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card);
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card);
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card);
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card);
    }
    return accumulator;
},{spades: [], diamonds: [], hearts: [], clubs: []});
console.log(cards2);
