// scope 이해하기
// scope란 변수 혹은 함수를 선언하게 될때 해당 변수부터 함수가 어디까지 유효한지 확인 
// Global Scope : 코드의 모든 범위 
// Function Scope : 특정함수 내부 
// Block Scope : if for문같은 블록 내부에서만 사용가능

// Global Scope
const value = 'hello';

function myFunction() {
    // console.log('myFunction: ');
    // console.log(value);
    // const value = 'bye';
    // const anotherValue = 'world';

    // function functionInside() {
    //     console.log('functionInside: ')
    //     console.log(value);
    //     console.log(anotherValue);
    // }

    // functionInside();
    // var로 한다면 
    const value = 'bye!';
    if (true) {
        // 블록내부에서만 유용한 값 
        const value = 'world';
        console.log('block scope:');
        console.log(value);
    }
    console.log('function scope: ');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction: ');
    // Function Scope
    const value = 'bye!';
    console.log(value);
}

myFunction();
otherFunction();

console.log('global scope:');
console.log(value);
// 함수 밖이기 때문에 사용할 수 없음.
// console.log(anotherValue);