// 배열
// 다른 언어와는 다르게 같은 type이 아니어도 됨. 배열안에 배열이 들어가거나 객체정보가 들어가도됨.
// 배열은 0부터 시작함.
const array = [1, 2, 3, 4, 5, 'DevRappers'];
console.log(array[0]);

const objects = [
    { name: '멍멍이' },
    { name: '야옹이' }
];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

// 배열에 새로운 항목을 추가하는 방법 :push();
objects.push({
    name: '멍뭉이'
})

console.log(objects);
console.log(objects[2]);
// 배열안에 몇개의 데이터가 들었는지 알아볼 때 : 배열.length
console.log(objects.length);