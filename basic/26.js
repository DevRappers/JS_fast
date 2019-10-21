// 배열 내장함수 (복습과 퀴즈)
// 퀴즈
// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

// 방법1
// function countBiggerThanTen(numbers) {
//     let count = 0;
//     numbers.forEach(n => {
//         if (n > 10) {
//             count++;
//         }
//     });
//     return count;
// }
// 방법2
// function countBiggerThanTen(numbers) {
//     const count = numbers.filter(n => n > 10);
//     return count.length;
// }
// 방법3
function countBiggerThanTen(numbers) {
    const counts = numbers.reduce((acc, current) => {
        if (current > 10) {
            return acc + 1;
        } else {
            return acc;
        }
    }, 0);
    return counts;
}

const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count);