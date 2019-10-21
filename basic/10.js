// 객체
// 객체는 우리가 어떠한 값을 선언하게 될때 하나의 이름에 여러종류의 값을 넣을 수 있도록 해줌.
const dogName = '멍멍이';
const dogAge = 2;

console.log(dogName);
console.log(dogAge);

// 입력할때마다 쉼표를 넣어 구분해줘야함 key : value값으로 사용함
// 주의사항 : key값에는 공백이 있으면 안됨. 공백을 넣어주기 위해서는 따옴표로 감싸줘야함
const dog = {
    name: '멍멍이',
    age: 2,
    'key with space': 'test'
}

// 이런식으로 key이름으로 value값을 가져올 수 있음
console.log(dog); // 객체에 대한 정보를 확인 할 수 있음
console.log(dog.name);
console.log(dog.age);

const ironMan = {
    name: '토니스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨',
};

const captainAmerica = {
    name: '스티븐 로저스',
    actor: '크리스 에반스',
    alias: '캡틴 아메리카',
}

// 함수안에서도 객체의 value값을 잘 뽑아줄 수 있음
// ES6의 비구조화할당 또 객체 구조분해를 사용하면 hero.alias같은 것을 더욱 간단히 할 수 있음
// const {}로 선언하고 객체를 삽입해주면 알아서 분해가 되서 저장됨. ~~.name 이렇게 사용안해도 됨.
// 파라미터 단계에서도 비구조화 할당이 가능함. 파라미터에서 사용할 경우 알아서 분해됨.
function print({ alias, name, actor }) {
    //const { alias, name, actor } = hero;
    //const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`
    console.log(text);
}

// 이런 식으로도 비구조화 할당을 할 수 있음
const { name } = ironMan;

console.log(ironMan);
console.log(name);
console.log(captainAmerica);
print(ironMan);
print(captainAmerica)