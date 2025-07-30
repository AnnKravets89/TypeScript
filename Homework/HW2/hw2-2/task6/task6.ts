let forms26: HTMLCollectionOf<HTMLFormElement> = document.forms;
let formConverter: HTMLFormElement = document.forms[0];
let formConverterInput: HTMLInputElement = formConverter['kgInput'];
let output: HTMLSpanElement = document.getElementsByTagName('span')[0];
let value: number = 2.2046;

formConverterInput.addEventListener('input', (): void => {
    const kg: number = +formConverterInput.value;
    const pound: number = kg * value;
    output.innerText = pound.toFixed(1);
})

