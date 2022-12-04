export {};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthsJs = {
//     January: 0,
//     February: 1
// }

// console.log(MonthsJs.January);
// console.log(MonthsJs.February);

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008800',
    BLUE = '#0000ff',
    BLACK = '000000',
    // YELLOW = '#ffff00',
};

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
    YELLOW = '#ffff00',
    GRAY = '#808080',
}

COLORS.YELLOW;