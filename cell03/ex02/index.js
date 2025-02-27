const input1 = document.querySelector('#input1');
const select = document.querySelector('#select');
const input2 = document.querySelector('#input2');
const tryme  = document.querySelector('.tryme');
const result = document.querySelector('#result');

window.setInterval(useme, 30000);

tryme.addEventListener("click", (e) =>
{

	let num1 = parseInt(input1.value, 10);
	let num2 = parseInt(input2.value, 10);

	if (num1 < 0 || num2 < 0)
	{
		result.innerHTML = 'Error :(';
		alert('Error :(');
		return ;
	}
	if (num2 == 0 && (select.value == '/' || select.value == '%'))
	{
		result.innerHTML = "It's over 9000!";
		alert("It's over 9000!");
		return ;
	}
	let res = eval(num1 + select.value + num2);
	result.innerHTML = res;
	alert(res);
	console.log(res);
});

function useme()
{
	alert("Please, use me...");
}
