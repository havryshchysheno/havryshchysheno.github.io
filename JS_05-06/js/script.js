var parent = document.querySelector('.wrapper');
var ms = 0;
var s = '00';
var m = '00';
var h = '00';
var element = document.querySelector('.timer');

document.getElementById('reset').addEventListener('click', reset);
document.getElementById('split').addEventListener('click', split);
document.getElementById('startstop').addEventListener('click', startNew)

function start () {
if (ms < 80) {
	ms = +ms + 20;
	ms = '0' + ms;
} else if (ms > 960) {
ms = '000';
	if (s < 9) {
	s++;
	s = '0' + s
	} else if (s > 58) {
	s = '00';
		if (m < 9) {
			m++;
			m = '0' + m
		} else if (m > 58){
		m = '00';
		h++;
		} else {m++;}
	} else {
		s++;
	} 
		}  else {
			ms = +ms + 20;
		}
element.innerHTML = h + ':' + m + ':' + s + '.' + ms;
}

function split () {
	var parent = document.querySelector('ul');
	var listItem = document.createElement('li');
	listItem.innerHTML = 'SPLIT - ' + element.innerHTML;
	parent.appendChild(listItem);
}

function reset () {
	var list = document.querySelector('ul');
	clearInterval(startTimer);
	element.innerHTML = '00:00:00.000';
	list.parentNode.removeChild(list);
	ms = 0;
	s = '00';
	m = '00';
	h = '00';
}

function startNew () {
	var status = document.querySelector('.start').value;
	if (status > 0) {
		var parent = document.querySelector('.wrapper');
		var list = document.createElement('ul');
		document.querySelector('.start').value = 0;
		document.querySelector('.start').innerHTML = 'Stop'
		parent.appendChild(list);
		startTimer = setInterval (start, 20);
	} else {
		var parent = document.querySelector('.wrapper');
		document.querySelector('.start').value = 1
		document.querySelector('.start').innerHTML = 'Start'
		clearInterval(startTimer);
		var parent = document.querySelector('ul');
		var listItem = document.createElement('li');
		listItem.innerHTML = 'STOP - ' + element.innerHTML;
		parent.appendChild(listItem);
	}
}