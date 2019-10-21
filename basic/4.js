// 비교연산자, 문자열 붙이기
const a = 1;
const b = 1;

// === : 두 값을 비교할때는 세번 사용함. 이퀄사인이 두개와 세개의 차이점은 두개는 type을 구분하지 않음
const equals = a === b;
console.log(equals);

// 이것과 더불어 == 은 null과 undefined, 0과 false도 같은 것으로 인식함.
b = '1';
const equals = a == b;
console.log(equals);

// !== : 두 값이 다른지 확인하기 위해 사용함
const notEquals = a !== b;
console.log(notEquals);

// <, <=, >, >= 는 값을 비교하기 위해 사용한다. 
const one = 10;
const two = 15;
const thr = 15;

// one이 two보다 작은가?
console.log(one < two);

// one이 b보다 큰가?
console.log(one > two);

// one이 b보다 크거나 같은가?
console.log(one >= two);

// 문자열을 이어 붙일때는 + 연산자로 두 변수를 이어주면 됨.
const str1 = '안녕';
const str2 = '하세요';

console.log(str1 + str2);