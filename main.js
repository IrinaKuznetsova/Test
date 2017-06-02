

var x = document.getElementById('number1')
var y = document.getElementById('number2')


document.getElementById('plus').addEventListener('click', function() {
	document.write(+x.value + +y.value);
})
document.getElementById('minus').addEventListener('click', function() {
	document.write(+x.value - +y.value);
})
document.getElementById('multiply').addEventListener('click', function() {
	document.write(+x.value * +y.value);
})
document.getElementById('divide').addEventListener('click', function() {
	document.write(+x.value / +y.value);
})
