function elementsList(array: (string | number | boolean)[]): void {
    document.write('<ul>')
    for (let element of array) {
        document.write(`
                            <li>${element}</li>
                      `)
    }
    document.write('</ul>')
}

let elements: (string | number | boolean)[] = [
    42,
    "banana",
    true,
    680,
    false,
    "coffee",
    99,
    "pineapple",
];
elementsList(elements);
