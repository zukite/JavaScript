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
for(let i = 0; i < $('.tab-button').length; i++){
    $('.tab-button').eq(i).on('click',function(){
        button.removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').removeClass('show');
        $('.tab-content').eq(i).addClass('show');
})
}




