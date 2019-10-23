// 단축 평가 논리 계산법
// 논리연산자를 사용하여 코드를 단축하는 것
const dog = {
    name: '멍멍이'
}

function getName(animal) {
    // if (animal) {
    //     return animal.name;
    // }

    // return undefined;

    return animal && animal.name;
}

const name = getName(dog);
console.log(name);

// 결과물이 true가 아닌 hello가 됨 앞에 오는게 true면 연산결과가 뒤에 있는 됨.
console.log(true && 'hello');
// 앞에 오는 값이 false면 뒤에 값은 보지도 않는다.
console.log(false && 'hello');
// bye가 결과물이 됨 . hello는 truthy한 값이기 때문에 
console.log('hello' && 'bye');
// 앞에 오는 결과물이 falsy한 값이기 때문에 앞에 있는 값을 출력함
console.log(null && 'hello');
console.log(undefined && 'hello');
console.log('' && 'hello');
console.log(0 && 'hello');
console.log(1 && 'hello');

const object = { name: 1 };

const name = object && object.name;
console.log(name);

// ||연산자 어떤값이 false라면 대체할값을 사용할때
const namelessDog = {
    name: ''
}

function getDogName(animal) {
    const name = animal && animal.name;
    // if (!name) {
    //     return '이름이 없는 동물입니다.'
    // }
    // return name;
    // name이 있을 때는 name을 출력하고 없으면 오른쪽항을 출력함.
    // 둘 중 하나만 true면 되기에 앞에 꺼가 true면 앞에것만 출력하고 앞에 거가 false면 뒤에거만 출력함
    return name || '이름이 없는 동물입니다.';
}

const name = getName(namelessDog);
console.log(name);

console.log(false || 'hello');
console.log('' || '이름없다');
console.log(null || '널이다~');
console.log(undefined || 'defined 되지 않았다!');
console.log(0 || '제로다');
console.log(1 || '음?');
console.log('와아' || '여기 안봐요');