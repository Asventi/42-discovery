const newbtn = document.querySelector('.new');
const list = document.querySelector('#ft_list');

var n = 0;
var last = -1;

function get_cookie(name) {
	const str = '; ' + document.cookie;
	const parts = str.split('; ' + name + '=');
	if (parts.length == 2)
		return (parts.pop().split(';').shift());
}

if (document.cookie != '')
{
	while (n < 50000)
	{
		let todo = get_cookie(n);
		if (todo != null && todo != '')
		{
		let elem = document.createElement("div");
		let para = document.createElement("p");
		let node = document.createTextNode(todo);

		last = n;
		elem.classList.add('item');
		elem.id = n;
		elem.onclick = function (e) {remove_elem(e)}
		para.classList.add('item_text');
		para.appendChild(node);
		list.insertBefore(elem, document.getElementById(n - 1));
		document.getElementById(n).appendChild(para);
		document.cookie = n + "=" + todo + "; expires=Mon, 5 Feb 2026 00:00:00; path=/";
		}
		n++;
	}
	n = last + 1;
}

newbtn.addEventListener("click", (e) =>
{
	let todo = prompt('Enter your TODO:');
	if (todo == null || todo == '')
		return ;
	let elem = document.createElement("div");
	let para = document.createElement("p");
	let node = document.createTextNode(todo);

	elem.classList.add('item');
	elem.id = n;
	elem.onclick = function (e) {remove_elem(e)}
	para.classList.add('item_text');
	para.appendChild(node);
	list.insertBefore(elem, document.getElementById(n - 1));
	document.getElementById(n).appendChild(para);
	document.cookie = n + "=" + todo + "; expires=Mon, 5 Feb 2026 00:00:00; path=/";
	n++;
});

function remove_elem(e)
{
	if (e.target.classList != 'item')
		return ;
	document.cookie = e.target.id + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
	e.target.remove();
}


