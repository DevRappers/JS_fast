// 배열 내장함수 (splice, slice)
// splice : 배열에서 특정항목을 제거할 때 사용함. splice(시작원소번호, 갯수) / 기존의 배열을 건드림
const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
const spliced = numbers.splice(index, 1);
console.log(spliced);
console.log(numbers);

// slice : 기존의 배열을 건드리지 않음 / slice(시작index, 끝index) 끝 index 전까지 자르기
const sliced = numbers.slice(0, 2);
console.log(sliced);
console.log(numbers);