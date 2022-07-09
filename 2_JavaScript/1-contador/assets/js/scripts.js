var number = document.getElementById('number');
var plusButton = document.getElementById('addButton');
var minusButton = document.getElementById('delButton');

function increment() {
	number.innerHTML++

	if (number.innerHTML >= 5) {
		plusButton.style.visibility = 'hidden'
	} else if (number.innerHTML > -5) {
		minusButton.style.visibility = 'visible'
	}
	
	if (number.innerHTML == 0) {
		number.setAttribute("id", "black");
	} else if (number.innerHTML > 0) {
		number.setAttribute("id", "blue");
	}
}
function decrement() {
	number.innerHTML--

	if (number.innerHTML <= -5) {
		minusButton.style.visibility = 'hidden'
	} else if (number.innerHTML < 5) {
		plusButton.style.visibility = 'visible'
	}

	if (number.innerHTML == 0) {
		number.setAttribute("id", "black");
	} else if (number.innerHTML < 0) {
		number.setAttribute("id", "red");
	}
}