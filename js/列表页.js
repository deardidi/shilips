$(function(){
	/*导航条*/
	$(".logo-box").mouseenter(function(){
		$('.logo2').animate({height:'50px'})
	})
	$(".logo-box").mouseleave(function(){
		$('.logo2').animate({height:'0'})
	})
     /*分页*/
    $('.list li').click(function(){
            $(this).addClass("active").siblings().removeClass('active')
    });
})

