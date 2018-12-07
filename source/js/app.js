// $(function(){
//     $('.today-navigation a').click(function(){
//         $(this).parents('.today-tabs').find('.today-wrap').addClass('hide');
//         $(this).parent().siblings().removeClass('active');
//         var id = $(this).attr('href');
//         $(id).removeClass('hide');
//         $(this).parent().addClass('active');
//         return false
//     });
// });


var tab = document.querySelectorAll('.today-wrap');

var navBtn = document.querySelectorAll('.today-navigation__item');
for (var i = 0; i < navBtn.length; i++){
    navBtn.onclick = function () {
        console.log('asdasd');
    }
}