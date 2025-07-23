let firstStrValue: string | null = prompt('Enter first number');
let secondStrValue: string | null = prompt('Enter second number');

if (firstStrValue !== null  && secondStrValue !== null ) {
    let firstNumValue: number = +firstStrValue;
    let secondNumValue: number = +secondStrValue;
    if (firstNumValue > secondNumValue) {
        console.log(firstNumValue);
    } else if (firstNumValue < secondNumValue) {
        console.log(secondNumValue);
    } else if (firstNumValue === secondNumValue){
        console.log('numbers are equal');
    }

}
