type Course81 = {
    title: string;
    monthDuration: number;
}
let coursesAndDurationArray81: Course81[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

console.log(coursesAndDurationArray81.map((item: Course81, index: number): {title: string, monthDuration: number, id: number} => ({id: index + 1, ...item})));
