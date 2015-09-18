$(document).ready(function(){
	var speed = "slow";			
	
	$('.slide').hide();
	$('.activeslide').show();
		
	$('#next').click(nextImage);
	$('#prev').click(prevImage);

// Jump to specific Slide
	$("li.slideNav").click(function(){
		
		var picNum = $(this).attr('id');
		var $picSelect = "#pic" + picNum;

		$('.slide').removeClass('activeslide');
		$($picSelect).addClass('activeslide');
		$(this).css('opacity','1');
		$(this).siblings('li').css('opacity','.2')
		$('.slide').fadeOut(speed);
		$('.activeslide').fadeIn(speed);
	});

	

// Set slider speed
	$("button#fast").click(function(){
		speed = "fast";
	});

	$("button#slow").click(function(){
		speed = "slow";
	});
	
// Go to next slide
	function nextImage(){
		// wrap
		$('.activeslide').removeClass('activeslide').addClass('lastactive');
		if($('.lastactive').is(':last-child')){
			$('.slide').first().addClass('activeslide');
		} else {
			$('.lastactive').next().addClass('activeslide');
		}
		$('.lastactive').removeClass('lastactive');
		$('.slide').fadeOut(speed);
		$('.activeslide').fadeIn(speed);
	}
	
// Go to previous slide
	function prevImage(){
		// wrap
		$('.activeslide').removeClass('activeslide').addClass('lastactive');
		if($('.lastactive').is(':first-child')){
			$('.slide').last().addClass('activeslide');
		} else {
			$('.lastactive').prev().addClass('activeslide');
		}
		$('.lastactive').removeClass('lastactive');
		$('.slide').fadeOut(speed);
		$('.activeslide').fadeIn(speed);
	}
});