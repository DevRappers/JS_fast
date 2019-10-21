// 연산자 (산술연산자, 대입연산자)
// = : 대입연산자 - 변수에 이 값을 넣겠다.
let value = 1;

// 산술 연산자 : + - * / %
let a = 1 + 2 - (3 * 4) / 4;
console.log(a);

// 값에 1을 더함 / 시점이 다름 미리 계산을한다. 보여주고 계산을 한다. 
// -- 도 가능함.
console.log(a++);
console.log(a);
console.log(++a);

// +=연산자는 왼쪽에 오른쪽값을 더해서 대입하겠다는 의미임 
// a = a+3과 같은 의미임 
// 나누기 빼기 곱하기도 같은 방법으로 진행함.
a += 3;