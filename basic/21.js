// 배열 내장함수 (filter)
// filter : 특정 조건을 걸어주고 배열에서 특정조건에 해당하는 배열을 만들어주는 함수

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

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);