// 조건문 (if, else, else if)
/*
    if는 만약에 라는 뜻으로 if(조건)이 만족할 시 {}안에 있는 내용을 실행시켜라!
    라는 뜻을 가지고 있음
*/
const a = 0;
if (a + 1 === 2) {
    console.log('a + 1이 2입니다.');
    console.log('안에 들어간 내용은 모두 실행됩니다.');

    // const와 let은 다른 블록에는 재선언 가능하기 때문에 가능하지만 var는 불가능하다.
    const a = 2;
    console.log('if문 안의 a 값은 ' + a);
}
console.log('if문 밖의 a 값은 ' + a);

/*
    else란 if의 조건이 만족하지 않을 때 그럼 만족하지 않으면 이 친구를 실행시켜줘 이거임.
    if(조건) <- 만족하지않아!!!
    {

    }
    else{   <- 위에 거가 아닌건 모두 이친구를 실행시켜!

    }
*/
const b = 10;
if (b > 15) {
    console.log('b가 15보다 큽니다.');
} else {
    console.log('b가 15보다 크지 않습니다.');
}

/*
else if()란 조건을 더 추가시켜줄 수 있는 것이다. 여러개가 추가 될 수 있음.
    if(조건) <- 만족하지않아!!!
    {

    }
    else if(조건){ <-이 친구는 만족하니?

    }
    else{   <- 위에 거가 아닌건 모두 이친구를 실행시켜!

    }
*/
const c = 10;
if (c === 5) {
    console.log('5 입니다!');
} else if (c === 10) {
    console.log('10 입니다!');
} else if (c === 7) {
    console.log('7입니다!');
} else {
    console.log('5도 아니고 10도 아닙니다.');
}