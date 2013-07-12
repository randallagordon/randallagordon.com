$(document).ready(function () {
/*	function filterPath(string) {
		return string
			.replace(/^\//,'')  
			.replace(/(index|default).[a-zA-Z]{3,4}$/,'')  
			.replace(/\/$/,'');
	}

	$('a[href*=#]').each(function() {
		if ( filterPath(location.pathname) == filterPath(this.pathname)
			&& location.hostname == this.hostname
			&& this.hash.replace(/#/,'') ) {
			var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
			var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
			if ($target) {
				var targetOffset = $target.offset().top;
				$(this).click(function() {
					$('html, body').animate({scrollTop: targetOffset}, 400);
					return false;
				});
			}
		}
	});*/

	function trigger(data) {
		var el = $.find('a[href$="' + data.id + '"]')[0];
		selectNav(el);
	}

	function selectNav(e) {
		$(this).parent().children("div.toggler").slideToggle({duration: 300, easing: 'easeInOutQuad'});
		e.preventDefault();
	}

	function selectNavGallery(e) {
		$(this).parent().parent().parent().children("div.viewer").children("div.toggler").slideUp({duration: 300, easing: 'easeInQuad'});
		$(this.hash).slideDown({duration: 300, easing: 'easeInQuad'});
		e.preventDefault();
	}

	$("div.section div.toggler").hide();
	$("div.section div.firstview").show(); // Unhide the firstview classed togglers...probably some nifty way to combine these two statements...

	$("div.section h5").removeClass("sectionTitle");
	$("div.section h5").hover(function () {
		$(this).stop().animate({
			paddingLeft: 220
    	}, 150);
	}, function () {
		$(this).stop().animate({
			paddingLeft: 200
    	}, 150);		
	});

	$("div.section a.toggle").click(selectNav);
	$("div.section a.gallerytoggle").click(selectNavGallery);

	$("#callToAction").fadeIn(2500, function () {
		$(this).animate({'opacity':0},2500);
	}); 
	
	$(".navigation li:nth-child(4n)").css("margin-right", "0px");

//	jQuery.easing.def = 'easeInBounce'; // Nifty "trying, trying, GOT IT!" effect
//	jQuery.easing.def = 'easeInOutQuad';

/*	if (window.location.hash) {
		trigger({ id : window.location.hash.substr(1)});
	} else {
		$('#sAbout a').click();
	} */
});