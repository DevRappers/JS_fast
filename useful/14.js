// 자바스크립트에서 비동기 처리 다루기 (Promise)
// Promise는 비동기 작업을 처리할 수 있도록 ES6에서 새로 생긴 문법임
// 원래는 callback함수로 처리해줬는데 callback은 많이 사용할경우 코드가 복잡해짐 
function increaseAndPrint(n, callback) {
    // 1초뒤에 어떤 작업을 할거야 선언해줌 
    setTimeout(() => {
        const increased = n + 1;
        console.log(increased);
        if (callback) {
            callback(increased);
        }
    }, 1000);
}

// 이런식으로 비동기적으로 작성할것이 많아진것  = callback지옥이라고 부름 
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log("작업 끝");
                })
            })
        })
    })
});

// Promise를 만드는 방법 resolve와 reject를 파라미터값으로 받아와 줘야함 
// Promise는 성공할때 또 실패할때가 있음. 성공할경우 resolve를 호출하고 실패할 경우 reject를 실행함. 
const myPromise = new Promise((resolve, reject) => {
    // 구현.....
    setTimeout(() => {
        //resolve('result');
        reject(new Error());
    }, 1000);
});

// 이 Promise가 끝나고 작업을 하고 싶다하면 .then을 붙여줌 
// 에러를 잡아낼때에는 .catch를 써서 잡아냄 
myPromise.then(result => {
    console.log(result);
}).catch(e => {
    console.error(e);
});

function increaseAndPrints(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            // value가 5가되면 에러를 반환해줌 
            if (value === 5) {
                const error = new Error();
                error.name = 'ValueIsFiveError';
                reject(error);
                return;
            }
            console.log(value);
            // resolve를 통해서 value값을 반환해줌 
            resolve(value);
        }, 1000);
    });
}

// 이런식으로 .then으로 resolve값으로 받기 때문에 들어온값을 계속 increaseAndPrints를 보내줄 수 있음
increaseAndPrints(0)
    .then(increaseAndPrints)
    .then(increaseAndPrints)
    .then(increaseAndPrints)
    .then(increaseAndPrints)
    .catch(e => {
        console.error(e);
    })