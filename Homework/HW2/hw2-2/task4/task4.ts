type LocalCounter = number;
type SavedItemType = string | null;

let savedItem: SavedItemType = localStorage.getItem('number');
let counter: LocalCounter;

 if (savedItem !== null) {
      counter = +savedItem;
 } else {
      counter = 0;
 }

counter += 1;
localStorage.setItem('number', counter.toString());

let blockElementByTag: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
for (let i = 0; i < blockElementByTag.length; i++) {
 blockElementByTag[i].innerText = counter.toString();
}
