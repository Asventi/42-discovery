const container = document.querySelector('div');

document.querySelector('#btn').addEventListener("click", () =>
{
	container.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});
