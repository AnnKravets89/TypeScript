type Temperature = {
    day: string,
    temperatures: number[]
}

let weekTemperatures: Temperature[] = [
    {
        day: 'Monday',
        temperatures: [18, 25, 21]
    },
    {
        day: 'Tuesday',
        temperatures: [17, 27, 22]
    },
    {
        day: 'Wednesday',
        temperatures: [19, 28, 23]
    },
    {
        day: 'Thursday',
        temperatures: [20, 29, 24]
    },
    {
        day: 'Friday',
        temperatures: [18, 26, 21]

    },
    {
        day: 'Saturday',
        temperatures: [16, 24, 20]
    },
    {
        day: 'Sunday',
        temperatures: [15, 23, 19]
    }
];
console.log(weekTemperatures);
