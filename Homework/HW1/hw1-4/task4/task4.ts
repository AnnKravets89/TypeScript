function giveBooks(books: BookType[] ): void {
    for (const book of books) {
        console.log(book);
    }
}

type BookType = {
    title:string,
    pages: number,
    authors: string[],
    genres: string[]
}
let books: BookType[] = [
    {
        title: "The Silent Patient",
        pages: 336,
        authors: ["Alex Michaelides"],
        genres: ["Thriller", "Mystery"]
    },
    {
        title: "Good Omens",
        pages: 432,
        authors: ["Neil Gaiman", "Terry Pratchett"],
        genres: ["Fantasy", "Comedy"]
    },
    {
        title: "Educated",
        pages: 352,
        authors: ["Tara Westover"],
        genres: ["Memoir"]
    },
    {
        title: "The Midnight Library",
        pages: 304,
        authors: ["Matt Haig"],
        genres: ["Fantasy", "Philosophical Fiction"]
    },
    {
        title: "Becoming",
        pages: 448,
        authors: ["Michelle Obama"],
        genres: ["Biography", "Inspiration"]
    },
    {
        title: "Sapiens",
        pages: 498,
        authors: ["Yuval Noah Harari"],
        genres: ["Non-fiction", "History", "Science"]
    },
    {
        title: "The Testaments",
        pages: 419,
        authors: ["Margaret Atwood"],
        genres: ["Dystopia", "Drama"]
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        pages: 224,
        authors: ["Douglas Adams"],
        genres: ["Science Fiction", "Comedy"]
    },
    {
        title: "The Book Thief",
        pages: 552,
        authors: ["Markus Zusak"],
        genres: ["Historical Fiction"]
    },
    {
        title: "American Gods",
        pages: 635,
        authors: ["Neil Gaiman"],
        genres: ["Fantasy", "Adventure"]
    }
];
giveBooks(books);
