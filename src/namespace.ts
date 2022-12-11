export {};

namespace Japanase {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public middleName: string,
            public lastName: string
        ) {}
    }    
}

const me = new Japanase.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanase.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
