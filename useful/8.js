// rest
// rest 도 ...을 사용함
// rest는 객체 배열 함수에서 사용이 가능함.
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
}

// spread는 객체나 배열을 퍼트린다면 rest는 퍼져있는 것들을 모아오는 역할을 함 
const { color, ...cuteSlime } = purpleCuteSlime;

console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(slime);

// 배열에서의 rest는 맨마지막에 와야함.
const numbers = [0, 1, 2, 3, 4, 5, 6];
const [one, ...rest] = numbers;
console.log(one);
console.log(rest);