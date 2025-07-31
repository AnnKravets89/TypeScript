type ItemType = {
    id: number;
    name: string;
}
const items: ItemType[] = Array.from({length: 100}, (_, index: number): ItemType => ({
    id: index + 1,
    name: `Item ${index + 1}`
}));
console.log(items);

const itemsPerPage = 10;
let currentPage: number = 0;

const dataDiv:HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
const prevBtn: HTMLCollectionOf<Element> = document.getElementsByClassName('prevBtn');
const nextBtn: HTMLCollectionOf<Element> = document.getElementsByClassName('nextBtn');

function renderPage(): void {
    dataDiv[0].innerText = ' ';
    const start: number = currentPage * itemsPerPage;
    const end: number = start + itemsPerPage;

    const visibleItems: ItemType[] = items.slice(start, end);

    visibleItems.forEach(item => {
        const div: HTMLDivElement = document.createElement('div');
        div.innerText = `${item.name}`;
        dataDiv[0].appendChild(div);
    })
}

prevBtn[0].addEventListener('click', () => {
    if(currentPage > 0) {
        currentPage--;
        renderPage();
    }
})

nextBtn[0].addEventListener('click', () => {
    if((currentPage + 1) * itemsPerPage < items.length) {
        currentPage++;
        renderPage();
    }
})
renderPage();
