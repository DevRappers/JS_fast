// let키워드는 변수를 선언해줄때 사용함.
// 예전에는 var이라는 키워드를 사용하였지만 현재는 사용하지 않음 
// var는 똑같은 이름으로 중복선언이 가능하기 때문에 사용을 안하는 추세 하지만
// 구형 브라우저에서는 let, const가 없기 때문에 사용 불가하다. 우리가 개발을 할때는 babel이라는 
// 구형 브라우저에 맡게 변화 시켜주는 것을 사용하기 때문에 신경쓰지 않아도 됨.
let value = 1;
console.log(value);

// 이미 선언된 변수는 또 선언할 수 없다. 값을 변경하는건 가능하다.
value = 2;
console.log(value);

// 상수는 const라는 키워드를 사용하며 값을 변경할 수 없으며 중복선언이 불가하다.
const a = 1;

// 변수에는 DataType이 존재하여 문자열 문자를 선언하는 방법은 다르다. 따옴표를 사용해도 되고 쌍따옴표를 사용해도 된다.
let text = 'hello';

// Boolean 타입은 true or false만을 가지는 데이터 타입임
let good = true;
let loading = false;

// javascript 에서는 null과 undefined는 값이 없다를 나타냄
// null같은 경우는 진짜 없다! 라는 의미이고 undefined는 값이 정해지지 않았다. 라는 뜻을 가짐.
// 아직 값이 어떤 것인지 모를때 undefined를 사용함. null은 그냥 없다!!! 를 나타냄