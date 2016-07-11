$(function() {
	$('.tab-link').click(function () {
		$(this).parent().addClass('active-tab');
		$(this).parent().siblings().removeClass('active-tab');
		$('.tab').not($(this).attr('href')).hide();
		$($(this).attr('href')).fadeIn(700);
		return false;
	})

	$('.carousel').jcarousel({
		// Configuration goes here
		list: '.slide-list',
		items: '.slide-item',
		animation: 'slow',
		wrap: 'circular'
		});

	$('.carousel-control-prev').jcarouselControl({
		target: '-=1'
		});

	$('.carousel-control-next').jcarouselControl();

	//  $('.carousel-pagination').jcarouselPagination();
	
                    $('.jcarousel-pagination')
                    .on('jcarouselpagination:active', 'a', function() {
                        $(this).addClass('active');
                    })
                    .on('jcarouselpagination:inactive', 'a', function() {
                        $(this).removeClass('active');
                    })
                    .on('click', function(e) {
                        return false
                    })
                    .jcarouselPagination({
                        item: function(page) {
                            return '<a href="#' + page + '">' + page + '</a>';
                        }
                    });

//===============CHECKBOX JQUERY===============*/
	$('.check-label').mousedown(
		function () {
			changeCheck($(this));
		});

	function changeCheck (el) {
		input = el.find('input');
		if (!input.hasClass('active')) {
			input.parent().css('background-position', '0 -20px');
			input.attr('checked','checked');
			input.addClass('active')
		} else {
			input.parent().css('background-position', '0 0');
			input.removeAttr('checked');
			input.removeClass('active')
		}
	} 
//================CUSTOM SELECT==========*/
 $( "#customSelect" ).selectmenu();



/*===========JQ MENU==========*/
$('.dropdown').hover(
	function () {
		$(this).children('.jq-sub-menu').slideDown();
	}, function () {
		$(this).children('.jq-sub-menu').slideUp();
	}
)

$('.jq-sub-menu>li').hover(
	function () {
		$(this).animate({
        			backgroundColor:"#F0954F",
    		}, 400 );
	}, function () {
		$(this).animate({
			backgroundColor: "#FF4B4B",
		}, 100)
	}
	)
/*==========JS MENU==========*/
var menu = document.querySelectorAll('.dropdown-js')

for (var i =0; i < menu.length; i++) {
	menu[i].addEventListener('mouseenter', showMenu)
	menu[i].addEventListener('mouseleave', hideMenu)
}

 function showMenu (el) {
 	this.children[1].style.display = 'block';
 	return false
 }

 function hideMenu (el) {
 	this.children[1].style.display = 'none';
 	return false
 }



});
