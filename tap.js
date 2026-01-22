// 자바스크립트 코드가 길어질 때 다른 파일을 생성해 코드를 작성

// ((중요)) 코드작성할 때 한번에 모든 것을 구현할 생각 X
// 쉬운 것 하나부터 O

// 버튼0 누르면 
// 모든버튼 orange 클래스 삭제
// 버튼0 orange 클래스 부착
// 모든 div show 클래스 삭제
// div0 show 클래스 부착

// 좋은 관슴 : 자주쓰는 셀렉터 변수에 넣어 쓰기
var button = $('.tab-button');

// for문 사용할 때 var 말고 let을 사용
// for(let i = 0; i < $('.tab-button').length; i++){
//     button.eq(i).on('click',function(){
//         탭열기(i);
// })
// }

// 이벤트버블링을 알고있으면 이벤트리스너가 많이 필요 없음(아래코드참고)
// $('.list').click(function(e){
//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         탭열기(0);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]){
//         탭열기(1);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]){
//         탭열기(2);
//     }
// })

$('.list').click(function(e){
    탭열기(e.target.dataset.id);
})

function 탭열기(숫자){
    $('.tab-button').removeClass('orange');
        $('.tab-button').eq(숫자).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(숫자).addClass('show');
}

// 정리
// 1. 함수로 축약할 때 변수있으면 파라미터로 변경하는 것이 좋음
// 2. data-id로 몰래 정보 숨기기 가능(dataset->이벤트리스너 적게 사용할 때 어떤 것을 눌렀는지 쉽게 파악 가능)
// 3. 이벤트리스너 1개만 써도 개발가능(=이벤트리스너 줄이면 이점이 있음)




