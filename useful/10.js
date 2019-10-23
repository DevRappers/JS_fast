// 함수 인자에서의 spread
function subtract(x, y) {
    return x - y;
}

const numbers = [1, 2];
const result = subtract(1, 2);
const result2 = subtract(...numbers);
console.log(result);
console.log(result2);

// 퀴즈 : 함수에 n개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요. 
function max(...rest) {
    // let max = rest[0];

    // rest.forEach(n => {
    //     if (max < n) {
    //         max = n;
    //     }
    // })
    // return max;
    return rest.reduce((acc, current) => (current > acc ? current : acc), rest[0])
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);