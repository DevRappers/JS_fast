// 배열 내장함수 (reduce)
// reduce : 배열이 주어졌을 때 배열안에 있는 모든값을 연산으로 사용할 때 자주 사용함
const numbers = [1, 2, 3, 4, 5];

// 2번째의 인자값은 초기값을 뜻하고 accmulator는 누적값을 뜻함 current각 원소값임
// index는 각 원소가 몇번째 아이템인지 알려줌 / array는 자기자신을 의미함
const avg = numbers.reduce((accumulator, current, index, array) => {
    // 현재 index가 마지막 원소값이라면
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(sum);