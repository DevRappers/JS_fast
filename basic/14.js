// 반복문 (for)
// 특정 작업을 반복적으로 실행할때 사용함. 특정조건이 만족할 때 계속 반복함
// 시작 -> 조건 -> true  -> 구문실행 
//        조건 -> false -> 끝

// 변수선언(초기화); 조건; 증감문(반복문이 돌아갈때마다 하는 행위)
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// 반대 방향으로 시작하기
for (let i = 10; i > 0; i--) {
    console.log(i);
}

// 배열과 함께 반복문 사용하기
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}