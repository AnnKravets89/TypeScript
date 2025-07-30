function addToLocalStorage(arrayName: string, objToAdd:{}): void {
    const item: string | null = localStorage.getItem(arrayName);
        if (!item) {
            throw new Error('There is no such array')
        }
    const arr: any = JSON.parse(item);

    if(typeof objToAdd === 'object') {
        arr.push(objToAdd);
    }
    localStorage.setItem(arrayName, JSON.stringify(arr));
}

localStorage.setItem('sessionsList', JSON.stringify([]));
addToLocalStorage('sessionsList', {});
