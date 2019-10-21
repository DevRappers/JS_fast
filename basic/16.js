// 반복문 (for...of, for...in)
// 주로 배열을 다룰 때 사용하는 반복문임.
const numbers = [10, 20, 30, 40, 50];

// let 변수이름은 상관없음 / number는 numbers를 다 돌아다니면서 10, 20, 30, 40, 50이 됨
// 자주 쓰지는 않음.
for (let number of numbers) {
    console.log(number);
}

// for...in은 객체를 다룰 때 자주 사용함.
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

// 객체의 키값들을 알고 싶을 때는 Object.keys(객체명)를 사용함
console.log(Object.keys(doggy));
// 객체의 value값을 알고 싶을 때는 Object.values(객체명)를 사용함
console.log(Object.values(doggy));
// 배열형태로 키와 value값을 반환함
console.log(Object.entries(doggy));

// key값을 뽑고 doggy에 있는 값을 key값으로 조회함
for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}