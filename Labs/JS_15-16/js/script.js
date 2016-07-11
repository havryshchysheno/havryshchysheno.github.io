$(function() {

var txt;

$('#search').keyup(function () {
	txt = $('#search').val();
})

$('#search-btn').on('click', function (e) {
	$.getJSON("https://pixabay.com/api/?key=2739797-4e244161938c5417a1be08f9d&q=" + txt + "&image_type=photo",
	function(data){
		var result = data.hits;
		var template = _.template($('#template').html());
		if($('.container>.result').length > 0) {
			$('.result').remove();
		}
		$('.container').append(
			template({result})
		)
	});
	return false;
})



/*======PROTOTYPE=======*/
function Human () {
	this.name = "David",
	this.age = 21,
	this.height = 180,
	this.weight = 70
}

function Worker () {
	this.workPlace = 'Company',
	this.salary = 2000
}

function Student () {
	this.college = 'Harvard',
	this.scholarship =1000
}

Student.prototype = new Human();

Worker.prototype = new Human();

Student.prototype.watch = function () {
	alert('watching TV');
}

var man = new Student();

var man2 = new Worker();


console.log(man);
console.log(man2);


})