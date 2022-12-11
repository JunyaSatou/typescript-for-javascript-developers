export {};

class Me {
    static isPorgrammer: boolean = true;
    static firstName: string = 'Atsushi';
    static lastName: string = 'Ishida'

    static work() {
        //     "Hey, guys! This is Atsushi! Are you interested in TypeScript? Let's drive into TypeScript!";
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's drive into TypeScript!`;
    }
}
// let me = new Me();
// console.log(me.isPorgrammer);

console.log(Me.isPorgrammer);
console.log(Me.work());
