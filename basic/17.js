// 반복문 (continue와 break)
// continue : 이번반복을 끝내고 바로 증감문으로 가라
// break : 반복문 자체를 종료하라
for (let i = 0; i < 10; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
    if (i === 5) {
        break;
    }
}