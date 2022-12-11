export {};

class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    run(): string {
        return `My name is ${this.name}. I can run`;
    }
}

class Lion extends Animal {
    public speed: number;

    constructor(name: string, speed: number) {
        super(name);

        this.speed = speed;
    }

    run(): string {
        return `${super.run()} ${this.speed}km/h`;
    }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());