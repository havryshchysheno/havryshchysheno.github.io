document.getElementById('row').addEventListener('click', numberStep);
document.getElementById('user').addEventListener('click', userCheck);

function numberStep () {
		var num = prompt ('Please enter your number');
		var numStep = prompt ('Please enter step for number');
		var result = 1;

		if (num > 0) {

				for (var i = 0; i < numStep; i++) {
						result *= num;
				}

				alert ('Your result is ' + result);
		} else {
				alert ('Please enter some data')
		}
}

function userCheck () {
		var users = [];

		for (var i = 0; i < 5; i++) {
				users.push(prompt('Please enter new name'));
		}
		
		var checkFlag = false;
		var newUser = prompt('Please enter your name');

		for (var i = 0; i < users.length; i++) {
				if (users[i] === newUser) {
						checkFlag = true;
						break;
				} 
		}

		if (checkFlag) {
				alert('Hello ' + newUser);
		} else {
				alert ('Error');
		}
}