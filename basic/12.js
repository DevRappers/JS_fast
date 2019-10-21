// 객체 - Getter와 Setter
// Getter와 Setter함수는 값을 변경이나 가져올때 형식을 변경하거나 할 수 있음
const numbers = {
    a: 1,
    b: 2,
    // 조회만 해도 안에있는 내용이 실행됨. 이런 것이 getter
    get sum() {
        console.log('sum 함수가 실행됩니다!');
        return this.a + this.b;
    }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

// key값이름 앞에 _를 붙인 이유는 setter함수와 겹치지 않게 하려고 그러는 것임.
const dog = {
    _name: '멍멍이',
    // 파라미터 값을 무조건 설정해줘야 함.
    get name() {
        console.log('_name을 조회합니다..');
        return this._name;
    },
    set name(value) {
        console.log("이름이 바뀝니다..." + value);
        this._name = value;
    }
}

console.log(dog.name);
dog.name = '뭉뭉이';
console.log(dog.name);

// 활용
const numbers = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

console.log(numbers.sum);
numbers.a = 5;
console.log(numbers.sum);
numbers.b = 7;
console.log(nubmers.sum);