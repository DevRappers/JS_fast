// spread연산자
// 이문법은 ... 을 사용함
// spread는 펼치다 퍼뜨리다 라는 뜻으로 객체 혹은 배열을 펼칠 수 있음
// 기존의 객체를 참고해서 새로운 객체를 만들고 싶다면 spread를 사용하면 굉장히 편함
const slime = {
    name: '슬라임'
}

// 이렇게 하면 3개 모두다 하나의 객체 만을 가르킴 
// const cuteSlime = slime;
// cuteSlime.attribute = 'cute';

// const purpleCuteSlime = cuteSlime;
// purpleCuteSlime.color = 'purple';

const cuteSlime = {
    ...slime,
    attribute: 'cute'
}

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
}

// 덮어씀 순서가 중요함
const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);

console.log(purpleCuteSlime === cuteSlime);

const animal = ['개', '고양이', '참새'];
// 배열을 합칠 수 있음 concat이랑 똑같은 코드인데 이렇게 하면 편함
const anotherAnimals = [...isAnimals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);

// spread 연산자를 여러번 사용도 가능함
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];

// [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
console.log(spreadNumbers);