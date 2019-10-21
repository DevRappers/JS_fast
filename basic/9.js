// 함수를 선언하는 또다른 방법 : 화살표 함수 ES6
// = (파라미터) => {내용}
// return 이 있을 경우 더 간결하게 가능하다. return을 안줘도 알아서 return됨
const add = (a, b) => {
    return a + b;
}

const minus = (a, b) => a - b;

const hello = (name) => {
    console.log(`Hello, ${name}!`);
}

const sum = add(1, 2);
console.log(sum);
const mi = minus(2, 1);
console.log(mi);
hello('DevRappers');