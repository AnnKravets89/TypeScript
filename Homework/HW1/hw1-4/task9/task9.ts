function personsList(array: PersonType[]): void {
    for (let user of users49) {
        document.write(`
                        <div>
                         <p>${user.id}
                            ${user.name}
                            ${user.age}</p>
                        </div>
                      `)
    }
}
type PersonType = { id: number, name: string, age: number }
let users49: PersonType[] = [
    { id: 1, name: "Anna", age: 25 },
    { id: 2, name: "Mark", age: 30 },
    { id: 3, name: "Sophie", age: 22 },
    { id: 4, name: "Daniel", age: 28 },
    { id: 5, name: "Lina", age: 35 }
];
personsList(users49);
