// 배열 내장 함수 (map)
// map : 배열안에 있는 모든 원소를 변환할 때 사용함. 전체적으로 변화하고 싶을 경우
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const squared = [];
// array.forEach(n => {
//     squared.push(n * n);
// })

const squared = array.map(n => n * n);

console.log(squared);

const items = [{
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(text);

// indexOf : 어디있는지 확인하기 배열의 위치 / 일치하는게 없다면 -1을 반환함
const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
const index = superheroes.indexOf('토르');
console.log(index);
// indexOf는 객체를 찾거나 어떤 조건으로 찾는 것은 불가능하다.

const todos = [{
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

// findIndex() 특정조건을 확인해서 그 조건이 일치한다면 일치하는 원소값을 찾아내기 
// 함수로 찾아내기 때문에 더욱 정교한 검색이 가능하다.
const indexs = todos.findIndex(todo => todo.id === 3);

console.log(indexs);

// find함수는 찾은 값을 반환함 / 위 3가지함수는 찾은 가장 첫번째값을 반환함
const indexss = todos.find(todo => todo.id === 3);

console.log(indexss);