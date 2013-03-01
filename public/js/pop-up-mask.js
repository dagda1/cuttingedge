
$(document).ready(function() {  					   
	$(window).resize(function () {
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});        
	});         
});

function popUpMask() {
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
        $('#mask').css({'width':maskWidth,'height':maskHeight});   
        $('#mask').fadeTo("slow",0.7);  
} 