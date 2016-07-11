$(function () {
'use strict'
var formData = {
	title_head: 'Тест по программированию',
	button: 'Проверить результаты',
}

var questions = [
	{
		title: 'Какой тег для заголовка',
		answers: ['h1', 'p', 'li'],
		correct: 'h1'
	},
	{
		title: 'Какая современная версия HTML',
		answers: ['HTML2', 'HTML3', 'HTML5'],
		correct:  'HTML5'
	},
	{
		title: 'Какой тег для разметки нумерованого списка',
		answers: ['ul','ol', 'div'],
		correct:  'ol'
	}
];

var storage = JSON.stringify(questions);

localStorage.setItem('test', storage)

var loc = localStorage.getItem('test')

var storageQuestions = JSON.parse(loc);

var template = _.template($('#lodash').html())

$('body').append(template(
	{
	formData, 
	storageQuestions
}
	));

})