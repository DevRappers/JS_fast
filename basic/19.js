// 배열 내장함수 (forEach)

const superheros = [
    '아이언맨',
    '캡틴 아메리카',
    '토르',
    '닥터 스트레인지'
];

for (let i = 0; i < superheros.length; i++) {
    console.log(superheros[i]);
}

// 배열의 원소값을 돌아가면서 함수를 실행시킴
//superheros.forEach(print);
// 간단하게 줄일 수 있음
// superheros.forEach(function(hero) {
//     console.log(hero);
// })
// 화살표 함수를 통해서 코드를 더욱 간결하게 짤 수 있음
superheros.forEach(hero => {
    console.log(hero);
})