interface IQuote {
    id: number;
    quote: string;
    author: string;
}
async function requestAPI<T>(url: string): Promise<T> {
    const response = await fetch(url);
        if(!response) {
            throw new Error('Could not fetch API response');
        }
        return await response.json() as T;
}
requestAPI<IQuote[]>('https://dummyjson.com/quotes')
    .then(quotes => {
        console.log(quotes);
})
