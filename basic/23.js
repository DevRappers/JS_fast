// 배열 내장함수 (shift, pop, unshift, push)
const numbers = [10, 20, 30, 40];

// shift : 첫번째 원소를 배열에서 추출해줌 / 근데 첫번째 값이 원래배열에서 사라짐
const value1 = numbers.shift();
console.log(value1);
console.log(numbers);

// pop : 마지막 원소를 배열에서 추출해줌 / 마지막 값이 원래배열에서 사라짐
const value2 = numbers.pop();
console.log(value2);
console.log(numbers);

// unshift : 배열 맨앞에 숫자를 추가함
numbers.unshift(5);
console.log(numbers);

// push : 배열 맨뒤에 추가함
numbers.push(50);
console.log(numbers);

// concat : 여러개의 배열을 합쳐줌 / 기존의 배열을 건드리지 않음
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
//const concated = arr1.concat(arr2);
// ES6 문법으로 배열에 있는 원소를 다 빼버림 스프레드 연산자라고 함
const concated = [...arr1, ...arr2];
console.log(concated);

// join : 배열안에 있는 값들을 문자로 합쳐줄때 / 파라미터로 넣는것은 구분자가됨
const arr3 = [1, 2, 3, 4, 5];
// 1,2,3,4,5
console.log(arr3.join());
console.log(arr3.join(' '));
console.log(arr3.join(', '));