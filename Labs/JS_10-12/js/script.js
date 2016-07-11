$(function () {
	var resig = $('#resig').html();
	var data = {
		head_name: 'Гаврыщишен Алексей Александрович',
		head_text: 'Работаю кем-то между DB Dev и аналитиком',
		photo: 'img/photo.jpg',
		main_text: 'Хочу учить фронтенд, потому что',
		main_item: [
			'Люблю писать код',
			'Нравится делать красивый продукт',
			'Хочу сменить профессию'
		]
	};

	var content = tmpl(resig,data)
           $('body').append(content);

/*==============lodash============*/
	var lodash = _.template($('#lodash').html());
	$('body').append(lodash(data));


	$('.carousel').carousel({
		arrow:'.carousel-arrow',
		carousel: '.carousel-list',
		animationSpeed: 1000,
		pixelsOffset: 605

	});


})




