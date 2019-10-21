// 조건문 (switch case)
// 값에 따라 다른 결과를 보여줄 때 사용.
const device = 'iphone';

// switch안에 값에 따라 case를 분류 시켜줌 
// break는 여기서 중지 하겠다는 의미임. default같은 경우에는 if문에서의 else와의 동일한 역할로 
// case들 중 만족하는 게 없을 때 실행함
// break를 안쓸시는 다음코드까지 모두 다 실행시켜버림.
switch (device) {
    case 'iphone':
        console.log('아이폰');
        break;
    case 'ipad':
        console.log('아이패드');
        break;
    case 'galaxy note':
        console.log('갤럭시 노트');
        break;
    default:
        console.log('모르겠어요...');
}