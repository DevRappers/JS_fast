// counter만들어주기
// DOM이란 각태그에 대한 정보를 가지고 있는 자바스크립트 객체
// id값으로 정보를 불러올때는 document.getElementById로 불러옴 
const number = document.getElementById('number');
//const increase = document.getElementById('increase');
//const decrease = document.getElementById('decrease');
// 아이디가 아닌 태그 이름으로 찾을 경우 
const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons;

// 아이디가 아닌 태그 이름으로 찾을 경우 
//const buttons = document.querySelectorAll('button');

// innerText를 하면 태그의 텍스트값을 알 수 있고, offsetTop을 하면 top위치를 알 수 있고
// .id로 id값을 가져올 수 있음
// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);

// 버튼 클릭시 이벤트 설정 / 다른 이벤트 설정도 많이 할 수 있음 on~~으로 시작함
increase.onclick = () => {
    // 문자열을 숫자형태로 변경해 주겠다. 10진수로 
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}