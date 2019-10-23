// 함수의 기본 파라미터
// 함수를 호출했을때 파라미터값을 넣지 않았을 경우 기본값을 지정 
// ES6의 함수 기본 값 지정은 간단하게 파라미터 = 기본값 으로 사용함 
const calculateCircleArea = (r = 3) => {
    // 이런 식으로도 할 수 있음
    //const radius = r || 3;

    // Math.PI : 원주율 -> 3.14
    return Math.PI * r * r;
}

// 만약에 값을 넣어주지 않는다면?
const area = calculateCircleArea();
console.log(area);