let timeStrValue: string | null = prompt('Enter number 0 - 60');
if (timeStrValue !== null) {
    let timeNumValue: number = +timeStrValue;
    if (timeNumValue > 0 && timeNumValue <= 15) {
        console.log('1 quarter');
    } else if (timeNumValue > 15 && timeNumValue <= 30) {
        console.log('2 quarter');
    } else if (timeNumValue > 30 && timeNumValue <= 45) {
        console.log('3 quarter');
    } else if (timeNumValue > 45 && timeNumValue <= 60) {
        console.log('4 quarter');
    } else {
        console.log('Wrong number');
    }
}

