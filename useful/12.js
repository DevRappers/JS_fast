// scope의 이해 (hoisting)
// 함수가 아래있어도 호출을 할 수 있는 것은 자바스크립트가 이렇게 작동함 끌어올림 
// hoisting은 왠만하면 피해야함
myFunction();

function myFunction() {
    console.log('hello world');
}

// 자바스크립트에서는 이렇게 이해함 undefined로 이해함 
// var은 발생하는데 const let은 hoisting이 발생하지 않음
// babel이나 const가 결론적으로는 var로 변화하기 때문에 .babelrc에 들어가서 수정해야함. 
// 최대한 hoisting을 피하면 됨

console.log(number);
var number = 2;

function fn() {
    console.log(a);
    // hoisting이 발생하지 않음
    let a = 2;
}

fn();