// 함수 파라미터에서의 rest

// 현재 rest는 하나의 배열임 / 들어온 값이 배열이 아니어도 배열화 시켜줌 
function sum(...rest) {
    //return a + b + c + d + e + f + g;
    return rest.reduce((acc, current) => acc + current, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));