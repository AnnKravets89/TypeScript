type CurrencyType = string | null;

let savedCurrency: CurrencyType = localStorage.getItem('currency');
let currencyCounter: number;

    if (savedCurrency !== null) {
        currencyCounter = +savedCurrency;
    } else {
        currencyCounter = 100;
    }

let lastUpdate: CurrencyType = localStorage.getItem('updateTime');
let now: number = Date.now();

    if (lastUpdate === null) {
        currencyCounter += 10;
        localStorage.setItem('currency', currencyCounter.toString());
        localStorage.setItem('updateTime', now.toString());

    } else {
        let lastUpdateNumber: number = +lastUpdate;
            if (now - lastUpdateNumber >= 10000) {
                currencyCounter += 10;
                localStorage.setItem('currency', currencyCounter.toString());
                localStorage.setItem('updateTime', now.toString());
            }
    }
let block: HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
block[0].innerText = `${currencyCounter} грн`;
