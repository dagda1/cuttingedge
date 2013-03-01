/********************************************************/
/*      ON.SCROLL - CONFIG                              */
/********************************************************/

var navClass = 'navigation';
var activeNavItemClass = 'nav-active';
var sectionAnchorClass = 'section';
var visibleFromBottom = 100; //how m
var scrollLock = false;
var sections = [];
var sectionsCount = 0;         

function setActiveNavItem(itemId){
	$('.'+ navClass +' a').toggleClass(activeNavItemClass, false);
	$('.' + navClass).find('a[href="#' + itemId + '"]').toggleClass(activeNavItemClass, true);
};

var Section = function(_id, _top){
	this.id = _id;
	this.top = Math.round(_top); //px
	this.select = function(){
		setActiveNavItem(this.id);
	};
};

var markNav = (function() {
	if(!scrollLock){
		var position = $(window).scrollTop();		
		if(position == 0){
			setActiveNavItem(sections[0].id);
			return true;
		}
		var i = 0;		
		while(i < sectionsCount-1 && ((sections[i+1].top - position) < ($(window).height() - visibleFromBottom)) )
		{
			i++;
		}
		setActiveNavItem(sections[i].id);
	}
});

$(document).ready(function() {
	var anchors = $('.' + sectionAnchorClass);
	sectionsCount = anchors.length;
	var position = 0;
	for(i=0; i<sectionsCount; i++){
		position = $(anchors[i]).offset();
		sections[i] = new Section($(anchors[i]).attr('id'),  position.top);
	}
	markNav();
	$(window).scroll(function() {
		markNav();
		$('body').append($('<div></div>').addClass('iosfix'));
		setTimeout(function() {
			$('.iosfix').remove();
		}, 500);
	});
	$('.navigation a').each(function(){
		$(this).click(function(event){
			event.preventDefault();
			scrollLock = true;
			var itemId = ($(this).attr('href')).replace('#', '');
			var position = $('div#' + itemId).position();
			$('html,body').animate(
				{ scrollTop: position.top+'px' },
				1000, 
				function() {
					scrollLock = false;
					setActiveNavItem(itemId);
				}	
			);
			
		});
	});
});