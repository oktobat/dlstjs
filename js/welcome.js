(function(){
    //company 인사말 페이지 연결
$('.company_bg li > a').on('click',function(e){
e.preventDefault(e)
var url = $(this).attr('href')
$('#containerBox').remove()
$('#boxArea').load(url)
})
})(jQuery)