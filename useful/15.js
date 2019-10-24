// 자바스크립트에서 비동기 처리 다루기 (async, await)
// Promise를 더욱 쉽게 사용하게 만들어줌
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
    await sleep(1000);
    const error = new Error();
    // error를 던질때는 throw를 사용함.
    throw error;
}

// async await문법을 사용할 때에는 함수앞에 async를 붙여줌 
async function process() {
    // 에러를 잡아내고 싶을경우 
    // try catch문법을 사용함 
    // 1초 뒤에 에러발생
    // try {
    //     await makeError();
    // } catch (e) {
    //     console.error(e);
    // }

    console.log('안녕하세요!');
    // Promise함수가 사용된 곳 앞에 await키워드를 붙여줌 
    // 이렇게 사용한다면 Promise를 기다릴때 .then이런것을 안해도됨.
    await sleep(1000);
    console.log('반갑습니다.');

    // async를 붙여주면 반환형이 Promise가 됨
    return true;
}

process().then(value => {
    console.log(value);
});