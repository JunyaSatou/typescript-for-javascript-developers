export {};

// * owner
//   * 所有者
//   * 初期化時に設定できる。
//   * 途中で変更できない。
//   * 参照できる。
// * secretNumber
//   * 個人番号
//   * 初期化時に設定できる。
//   * 途中で変更できる。
//   * 参照できない

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner(): string {
        return this._owner;
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }
}

let card = new MyNumberCard('はむさん', 1234567890);
console.log(card.owner);

console.log(card);

card.secretNumber = 1111111111;

console.log(card);