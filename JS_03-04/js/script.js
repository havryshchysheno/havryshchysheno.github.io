var startBtn = document.createElement('button');
var parent = document.body;
parent.className = 'text-center'
startBtn.innerHTML = 'Press button'
startBtn.className = 'btn btn-danger';
startBtn.id = 'start'
parent.appendChild(startBtn);

document.getElementById('start').addEventListener('click', createDoc);

var dynamicArr = {
	documentHead: 'Тест по программированию',
	listHead: 'Вопрос №',
	listVar: 'Вариант ответа №',
	buttonText: 'Проверить мои результаты',
	container: function () {
		var container = document.createElement('div');
		container.className = 'container text-center';
		document.body.appendChild(container);
	},
	form: function () {
		var form = document.createElement('form');
		var parent = document.querySelector('.container')
		form.className = 'form'
		parent.appendChild(form);
	},
	headPush : function () {
		var head = document.createElement('h1');
		var parent = document.querySelector('.form')
		head.innerHTML = this.documentHead;
		parent.appendChild(head);
	},
	listHeader: function (x) {
		var listHead = document.createElement('h2');
		var parent = document.querySelector('.form')
		listHead.className = 'text-left'
		listHead.innerHTML = this.listHead + x;
		parent.appendChild(listHead);
	},
	emptyList: function (x) {
		var list = document.createElement('ul');
		var parent = document.querySelector('.form');
		list.className = 'list-unstyled text-left';
		list.id = 'list-'+x
		parent.appendChild(list);
	},
	listItem: function(x) {
		var listVar = document.createElement('li');
		var check = document.createElement('input');
		var label = document.createElement('label');
		var parent = document.getElementById('list-'+i);
		label.innerHTML = this.listVar + x;
		label.setAttribute( 'for' , 'check-' + i + '-' + x );
		check.type = "checkbox";
		check.id = 'check-' + i + '-' + x
		parent.appendChild(listVar);
		listVar.appendChild(check);
		listVar.appendChild(label);
	},
	button: function () {
		var button = document.createElement('button');
		button.innerHTML = this.buttonText;
		button.className = 'btn btn-primary'
		var parent = document.querySelector('.form');
		parent.appendChild(button);
	}
};
function createDoc () {
var hideBtn = document.getElementById('start');
hideBtn.className = 'hidden';
dynamicArr.container();
dynamicArr.form();
dynamicArr.headPush() ;

for (i = 1; i < 4; i++) {

	dynamicArr.listHeader(i);
	dynamicArr.emptyList(i);

	for (j = 1; j < 4; j++) {
		var listName = document.querySelectorAll('ul');
		dynamicArr.listItem(j);
		console.log(listName[j]);
	}
};
dynamicArr.button();
}