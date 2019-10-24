// 자바스크립트에서 비동기 처리 다루기 (Promise all, Promise.race)
// 화살표 함수에서 async를 쓰고 싶을 때는 이런식으로 사용하면 됨.

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async() => {
    await sleep(1000);
    return '멍멍이';
}

const getRabbit = async() => {
    await sleep(500);
    return '토끼';
}

const getTurtle = async() => {
    await sleep(3000);
    return '거북이';
}

async function process() {
    // 여러개의 Promise를 한번에 처리하고 싶다면 어떻게 해야할까? 
    // Promise.all이라는 함수를 사용하면 됨 
    // Promise.race는 Promise에 등록한 것중 가장 빨리 끝낸것 하나만 나타나게 됨.
    // race같은경우보다 all이 많이쓰임 

    // const [dog, rabbit, turtle] = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    const first = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(first);
    // console.log(dog);
    // console.log(rabbit);
    // console.log(turtle);

    // const dog = await getDog();
    // console.log(dog);

    // const rabbit = await getRabbit();
    // console.log(rabbit);

    // const turtle = await getTurtle();
    // console.log(turtle);
}

process();