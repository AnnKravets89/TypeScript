//@ts-ignore
const exchange513 =
    (sumUAH: number,
     currencyValues:CurrentType[],
     exchangeCurrency: string): number => {
    let selectedCurrency;
    for (let i of currencyValues) {
        if (i.currency === exchangeCurrency) {
            selectedCurrency = i;
        }
    }
    if (selectedCurrency) {
        return sumUAH / selectedCurrency.value;
    }
    return -1;
}
type CurrentType = {currency:string,value:number};
console.log(exchange513( 10000, [{currency:'USD',value:25},{currency:'EUR',value:42}], 'USD'));
