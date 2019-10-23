// Truthy와 Falsy
// Truthy는 true같은 것? Falsy는 false같은 것?
function print(person) {
    // null checking
    // if (person === undefined || person === null) {
    //     return;
    // }
    // 이렇게하게 되면 undefined랑 null checking을 안해도됨 둘의 값은 false로 간주하기 때문에 !를 붙여주면됨 
    // undefined, null, 0, '', NaN 은 false로 간주함. 이런 값을 Falsy한 값이라함 
    // 이 값들을 제외한 모든 값들은 Truthy한 값이라고 하고 true로 간주함.
    if (!person) {
        return;
    }
    console.log(person.name);
}

const person = null;

print(person);

const value = null;

// 이런 식으로 true하냐 false하냐를 구분할때에는 굳이 삼항연산자를 쓰지 않고 !!를 써주면됨
//const truthy = value ? true : false;
const truthy = !!value;
console.log(truthy);