export {};

let numbers: number[] = [1, 2, 3]

console.log(numbers)

let numbers2: Array<number> = [1, 2, 3]

console.log(numbers2)

let strings2: string[] = ['Tokyo', 'Osaka', 'Kyoto']

console.log(strings2)

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript']

console.log(strings)

// 2次元配列
let nijigenhairetsu: number[][] = [
    [50, 100],
    [150, 300],
]

console.log(nijigenhairetsu)

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan']

console.log(hairetsu)