//@ts-ignore
const createList57 = (item: string, count: number): void => {
    document.write('<ul>')
    for (let i = 0; i < count; i++) {
        document.write(`              
                        <li>${item}</li>
                 `)
    }
    document.write('</ul>')
}
createList57('I was dancing in the rain', 10);
