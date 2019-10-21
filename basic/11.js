// 객체 - 객체 안에 함수 넣기
const dog = {
    name: '멍멍이',
    sound: '멍멍!',
    // 이름이 겹칠경우 key값과 value값이 같을 경우에는 이런식으로 선언해도됨. 
    // 여기서는 화살표 함수가 되지 않음. function은 가능함.
    say() {
        // 여기서의 this는 dog를 의미함
        console.log(this.sound);
    }
}

const cat = {
    name: '야옹이',
    sound: '야옹~'
};

// function으로 만든 this는 객체 자기자신을 가르키기 때문에 야옹이 출력됨
cat.say = dog.say;
dog.say();
cat.say();

const catSay = cat.say;
//catSay(); <- 이렇게 따로 뺏을 때는 this가 무엇인지 모르기 때문에 에러가 발생함