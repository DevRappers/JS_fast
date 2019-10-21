// 반복문 (while)
// whlie(조건){반복될구문} 변화를 주려면 코드블록 내부에서 해줘야함
// 초기값 작성은 반복문의 바깥에서 증감하는 부분은 코드블록 내부에서 선언해줘야함.
// 조건이 false가 되도록해줘야함. 안 그러면 무한 루프 현상이 발생함.
let i = 0;
let isFun = false;

while (!isFun) {
    console.log(i);
    i++;
    if (i === 30) {
        isFun = true;
    }
}