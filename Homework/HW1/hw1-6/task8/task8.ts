type CourseType = {title: string, monthDuration: number};
const coursesAndDurationArray68: CourseType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const updateCourses: CourseType[] = coursesAndDurationArray68
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index) => ({id: index + 1, ...value}));
console.log(updateCourses);
