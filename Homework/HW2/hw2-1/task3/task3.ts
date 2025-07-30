type Course23 = {
    title: string;
    monthDuration: number;
}
let coursesAndDurationArray23: Course23[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray23) {
    let divCourse: HTMLDivElement = document.createElement('div');
    divCourse.innerText = course.title + ' ' + course.monthDuration;

    document.body.appendChild(divCourse);
}
