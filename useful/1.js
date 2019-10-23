// 삼항연산자
// 조건 ? 참 : 거짓 으로 사용함 조건에 true가 되면 왼쪽항에 있는게 실행 거짓이면 오른쪽항이 실행 
const array = [];
let text = array.length === 0 ? '배열이 비어있습니다.' : '배열이 비어있지 않습니다.';

/*
if (array.length === 0) {
    text = '배열이 비어있습니다.';
} else {
    text = '배열이 비어있지 않습니다.';
}
*/

console.log(text);

const condition1 = false;
const condition2 = false;

// 중첩 삼항연산자 : 이런 코드는 작성 안하는게 좋음 가독싱이 떨어짐 
const value = condition1 ? '와우!' :
    condition2 ? 'blabla' : 'foo';

console.log(value);