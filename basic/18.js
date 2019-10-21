// 반복문 - 연습과 퀴즈
// 배열을 넣어주면 배열의 합을 구하는 함수
function sumOf(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

// 퀴즈 
// 숫자로 이루어진 배열이 주어졌을 때, 해당 숫자 배열안에 들어있는 숫자 중 3보다 큰 숫자로만 이루어진 배열을 새로 만들어서 반환해보세요.
function biggerThanThree(numbers) {
    let array = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 3) {
            array.push(numbers[i]);
        }
    }
    return array;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers));