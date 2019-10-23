// 비구조화 할당 (구조 분해)
const object = { a: 1, b: 1 };
// 기본값 설정할때 =로 하면됨 
const { a, b = 2 } = object;
console.log(a);
console.log(b);

// 만약에 b의 값이 없을 경우 기본값사용 방법
function print({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}

print(object);

const animal = {
    name: '멍멍이',
    type: '개'
};

//const nickname = animal.name;
// 이렇게 하면 비구조화 할당할때 이름을 설정해줄 수 있음.
const { name: nickname } = animal;

console.log(nickname);
console.log(animal);

// 배열 비구조화 할당
const array = [1, 2];

// const one = array[0];
// const two = array[1];
// 비구조화 할당 및 기본값설정 가능 
const [one, two = 2] = array;

console.log(one);
console.log(two);

const deepObject = {
    state: {
        information: {
            name: 'DevRappers',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
}

// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;

const {
    state: {
        information: {
            name,
            languages: [firstLang, secondLang]
        }
    },
    value
} = deepObject;

const extracted = {
    // name : name 이런 것을 안해도되는건데 특정 키이름과 value값이 동일할때는 생략가능함.
    name,
    firstLang,
    secondLang,
    value
};

console.log(extracted);