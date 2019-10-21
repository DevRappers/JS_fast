// 함수
// 특정 코드를 하나의 명령으로 사용가능하게 할 수 있는 것
// 함수를 만들때에는 function이라는 키워드를 사용하고 function다음에는 함수명과 ()안에는 파라미터이름이 들어가게 됨
// return은 반환값을 말하며 함수를 호출한 곳에 반환하게 된다.
function add(a, b) {
    // 함수에서는 return이 사용되는 순간 함수가 종료됨
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

function hello(name) {
    console.log('Hello, ' + name + '!');
}

hello('DevRappers');

// ES6에서 문자열을 조합할 수 있는 방법
// ES6 = ECMAScript 6 를 가르키며 자바스크립트의 버전을 가르킴 ES2015라고도 불림
// const, let도 ES6에 나온 것임. 현재는 ES10까지 나옴.
// Template Literal ` (백틱)을 사용해서 문자열 안에 자연스럽게 변수값을 넣어서 출력가능하게 해줌
function hi(name) {
    console.log(`Hello, ${name}!`);
}

function reHi(name) {
    // 함수에서는 return이 사용되는 순간 함수가 종료됨
    return `Hello, ${name}!`;
}
hi('DevRappers');
const result = reHi('DevRappers');

console.log(result);