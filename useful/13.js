// 자바스크립트에서 비동기 처리 다루기 (비동기 처리의 이해)
// 동기적처리와 비동기적처리가 다른 것 
// 동기적은 작업이 끝날때 까지 준비상태가 되고 1번이 끝나고 2번이 시작하고 이렇게 되는 것이 동기적 
// 비동기적은 동시에 여러가지 작업을 처리할 수 있고 기다리는 과정에서 다른 함수를 호출할 수 있는 것
// SANDBOX.CONFIG.JSON에서 Infinite Loop Protection을 비활성화해야함
// 함수가 끝난 다음 어떤 작업이 하고 싶을 경우에는 callback함수를 파라미터로 전달하면 됨 
function work(callback) {
    // 비동기적으로 실행할때 0 은 이 숫자만큼 시간이 흐른후 특정작업을 하겠다를 의미함.
    setTimeout(() => {
        // 자바스크립트 내장함수로 현재날짜를 숫자형태로 표시해줌. 
        const start = Date.now();

        for (let i = 0; i < 1000000000; i++) {

        }

        // start와 end시간의 차이를 확인해봄 
        const end = Date.now();
        console.log(end - start + 'ms');
        callback(end - start);
    }, 0)
}

// work함수가 끝나고난 다음에 console.log가 됨.
// 만약 동시에 실행시키고 싶으면 비동기적 함수를 만들어줘야함 
console.log('작업 시작!');
work((ms) => {
    console.log('작업이 끝났어요!');
    console.log(ms + 'ms 걸렸다고 합니다!');
});
console.log('다음 작업');

// 이런식의 비동기적방법을 사용하는 경우는 Ajax Web Api요청이나 파일을 읽어올때 
// 암호화 또는 복호화를 진행할때 작업을 예약할때 사용한다고 함.