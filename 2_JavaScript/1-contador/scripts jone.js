var currentNumber = document.getElementById('currentNumber');
var valor = currentNumber.innerHTML
var addButton = document.getElementById('addButton');
var delButton = document.getElementById('delButton');
var count = 0

function exibeBotao(botao, status) {
	var botao = document.getElementById(botao);
	botao = status;
}

function escondeBotaoDel() {
	delButton.hidden = true;
}

function increment() {
	valor++
	if (valor >= 5) {
		exibeBotao('addButton', true);
	} else if (valor == 0) {
		currentNumber.setAttribute("id", "black");
	} else if (valor > 0) {
		currentNumber.setAttribute("id", "blue");
	} else if (valor > -5) {
		exibeBotao('addButton', false);
	}
	
	if (currentNumber.innerHTML == 0) {
		currentNumber.setAttribute("id", "black");
	} else if (currentNumber.innerHTML > 0) {
		currentNumber.setAttribute("id", "blue");
	}
}

function decrement() {
	currentNumber.innerHTML--

	if (currentNumber.innerHTML < -4) {
		delButton.hidden = true
	} else if (currentNumber.innerHTML < 5) {
		addButton.hidden = false
	}

	if (currentNumber.innerHTML == 0) {
		currentNumber.setAttribute("id", "black");
	} else if (currentNumber.innerHTML < 0) {
		currentNumber.setAttribute("id", "red");
	}
}