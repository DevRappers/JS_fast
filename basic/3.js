// 논리 연산자 
// NOT(!), AND(&&), OR(||)
let value = true;

// NOT연산자는 true는 false로 false는 true로 변경시킴. 반전
const a = !value;
console.log(a);

// &&연산자는 양쪽의 값이 모두 true면 true 다르면 false
a = true && true;
console.log(a);

// ||연산자는 양쪽의 값중 하나면 true여도 true 
a = true || false;
console.log(a);

// 연산자의 우선순위는 NOT -> AND -> OR 순이다.