// 프로토타입과 클래스 (ES6 Class)
// javascript에서는 예전에는 클래스라는게 없었음. ES6에서는 클래스가 도입됨.
class Animal {
    // constructor는 생성자라는 의미를 가지고 있음. 
    constructor(type, name, sound) {
            this.type = type;
            this.name = name;
            this.sound = sound;
        }
        // prototype에서 설정한 것과 같은 역할을 함. 자동으로 prototype으로 등록됨
    say() {
        console.log(this.sound);
    }
}

// extends : 상속을 받을 때 사용함 extends 부모클래스
class Dog extends Animal {
    constructor(name, sound) {
        // super는 부모의 생성자 호출 
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('양양이', '양양');

dog.say();
cat.say();
cat2.say();