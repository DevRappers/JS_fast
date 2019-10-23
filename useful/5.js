// 조건문 더 스마트하게 쓰기
// 특정 값이 여러 값중 하나인지 확인하기
// 이런 식으로 작성하면 많이 짧아짐 
const isAnimals = (text) => ['고양이', '개', '거북이', '너구리'].includes(text);

function isAnimal(text) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    // 배열안에 text가 존재하면 true 없으면 false 배열 내장함수임 
    return animals.includes(text);
    // return (
    //     text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
    // );
}

console.log(isAnimal('개'));
console.log(isAnimal('고릴라'));

// 값에 따라 결과물이 다르게 할때 
function makeSound(animal) {
    // switch (animal) {
    //     case '개':
    //         return '멍멍';
    //     case '고양이':
    //         return '야옹';
    //     case '참새':
    //         return '짹짹';
    //     case '비둘기':
    //         return '구구';
    //     default:
    //         return '...?';
    // }

    // if (animal === '개') return '멍멍!';
    // if (animal === '고양이') return '야옹~';
    // if (animal === '참새') return '짹짹';
    // if (animal === '비둘기') return '구구 구 구';
    // return '...?';

    // 객체를 활용함 
    // const sounds = {
    //     개: '멍멍',
    //     고양이: '야옹',
    //     참새: '짹짹',
    //     비둘기: '구구'
    // };
    // return sounds[animal] || '...?';

    const tasks = {
        개: () => {
            console.log('멍멍');
        },
        고양이() {
            console.log('야옹');
        },
        비둘기() {
            console.log('구구');
        }
    }

    const task = tasks[animal];

    if (!tasks[animal]) {
        console.log('...?');
        return;
    }

    task();
}

makeSound('개');
makeSound('비둘기');
makeSound('인간');