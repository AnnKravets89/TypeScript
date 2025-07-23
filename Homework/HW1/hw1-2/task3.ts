type Author = {name: string, age: number}
type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
}
let book1: Book = {
    title : '1984',
    pageCount : 328,
    genre : 'Dystopian fiction',
    authors : [
        {
            name: 'George Orwell',
            age : 46
        },
        {
            name : 'Jane Austen',
            age : 41
        },
        {
            name : 'Andy Weir',
            age : 52
        }
    ]
};

let book2: Book = {
    title : 'Pride and Prejudice',
    pageCount : 279,
    genre : 'Classic romance',
    authors : [
        {
            name: 'George Orwell',
            age : 46
        },
        {
            name : 'Jane Austen',
            age : 41
        },
        {
            name : 'Andy Weir',
            age : 52
        }
    ]
};

let book3: Book = {
    title : 'The Martian',
    pageCount : 369,
    genre : 'Science fiction',
    authors : [
        {
            name: 'George Orwell',
            age : 46
        },
        {
            name : 'Jane Austen',
            age : 41
        },
        {
            name : 'Andy Weir',
            age : 52
        }
    ]
};
