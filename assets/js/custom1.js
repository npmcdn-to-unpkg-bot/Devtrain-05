console.log('script from cutsom1');
$(document).ready(function(){

	$('.nav li').click(function(){
		$('.nav li').removeClass('active');
		$(this).addClass('active');
	});

});