// 프로토타입과 클래스 (객체 생성자)
// 객체 생성자는 함수를 통해 새로운 객체를 만들고 그안에 넣고싶은 값 또는 함수를 구현할 수 있게 해줌.
// 객체 생성자를 만들때는 주로 대문자로 시작함
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

// 공통된 함수를 가지고 있을 때 재사용하고 싶을 경우 prototype을 사용함
// prototype은 객체 생성자로 무언가 만들었을 때 그 객체들끼리 공유할수 있는 어떠한 값
// 이나 함수를 설정할 수 있게 해주는 것.
Animal.prototype.say = function() {
    console.log(this.sound);
}

Animal.prototype.sharedValue = 1;

// 객체 생성자를 통해 객체를 생성할 때는 앞에 new를 붙임 
const dog = new Animal('개', '멍멍이', '멍멍');

const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();