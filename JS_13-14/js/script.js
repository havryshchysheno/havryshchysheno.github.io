$(function () {
'use strict'

$('#submit').on('click', check);

$('.modal__close, .overlay').on('click', hideModal);

function check (e) {
	var loc = localStorage.getItem('test');
	var storageQuestions = JSON.parse(loc);
	var correct = [];
	var selected = $('input:checked');
	var result = 0

	for (var i = 0; i<storageQuestions.length; i++) {
	correct.push(storageQuestions[i].correct)
	}

	for (var i = 0; i < selected.length; i++) {
		if (selected[i].getAttribute('id') === correct[i]){
			 result +=33
		} else {
			 result +=0
		}
	}
	
	if (result >= 67){
		$('.result').text('100');
	} else {
		$('.result').text(result);
	}
	
	showModal();
	return false;
}

function showModal () {
	$('.overlay').fadeIn(400, 
		function() {
			$('.modal-container').show().animate({opacity: 1, top: '50%'}, 200);
		});
	}

function hideModal () {
	$('.modal-container')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){
					$(this).hide(); 
					$('.overlay').fadeOut(400);
				});
	$('input:checked').prop('checked', false);
	}
})

