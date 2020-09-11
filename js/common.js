(function($){
//메인 페이지 연결
$('#boxArea').load('main.html')
//로그인 페이지 연결


$('.depth2 > li > a').on('click', function(e){
    e.preventDefault()
    var url = $(this).attr('url')
    $('#containerBox').remove()
    $('#boxArea').load(url)
})






})(jQuery)