// 프로토타입과 클래스 (객체 생성자 상속하기)
// 상속이란 비슷한 객체 생성을 해야할 때 안에 있는 내용을 상속받도록 하는 것 
// 동물 같은 경우에는 animal밑에 강아지 고양이가 따로 있는 것 
// 자동차로 예를 들경우에는 람보르기니, 페라리가 따로 있는 것 이런느낌임
// 거의 똑같은 객체 생성자를 두개 만들거같으면 상속하는 것이 좋음
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
}

function Dog(name, sound) {
    // call내장 함수를 통해서 자기자신의 객체 type, 이름, 소리를 보내줌 
    Animal.call(this, '개', name, sound);
}

function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}

// 상속을 받을 경우 이작업을 해줘야함 prototype에 가진 값을 가져가려면
// prototype공유
Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;

const dog = new Dog('멍멍이', '멍멍');

const cat = new Cat('야옹이', '야옹');

dog.say();
cat.say();