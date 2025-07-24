let strValue: string | null = prompt('Choose number 1, 0 or -3');
if (strValue !== null) {
    let numValue: number = +strValue;
        if (numValue !== 0) {
            console.log('Correct');
        } else  {
            console.log('Wrong');
        }
}

