//@ts-ignore
let elementsList58 = (array: (number | string | boolean)[]): void => {
    document.write('<ul>')
    for (const element of array) {
        document.write(`
                            <li>${element}</li>
                      `)
    }
    document.write('</ul>')
}
const elements58: (number | string | boolean)[] = [
        42,
    "banana",
    true,
    680,
    false,
    "coffee",
    99,
    "pineapple",
];
elementsList58(elements58);
