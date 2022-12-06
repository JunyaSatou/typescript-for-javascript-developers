export {};

class Person {
    public name: string;
    private age: number;
    protected nationality: string

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }

    profile(): string {
        return super.profile() + `, nationality: ${this.nationality}`;
    }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile())
console.log(taro.name)
// console.log(taro.getAge())
// let hanako = new Person();

let android = new Android('Android', 30, 'Japan');
console.log(android.profile())