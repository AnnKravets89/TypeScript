type Course24 = {
    title: string;
    monthDuration: number;
}
let coursesAndDurationArray24: Course24[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray24) {
    let divCourse: HTMLDivElement = document.createElement('div');
    divCourse.classList.add('item');

    let h2: HTMLHeadingElement = document.createElement('h2');
    h2.classList.add('heading');
    h2.innerText = course.title;

    let p: HTMLParagraphElement = document.createElement('p');
    p.classList.add('description');
    p.textContent = course.monthDuration.toString();

    divCourse.append(h2, p);
    document.body.appendChild(divCourse);
}
