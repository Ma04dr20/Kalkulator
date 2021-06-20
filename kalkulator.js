function zobacz(num)
{
	document.getElementById("ekran").value+=num;
}

function wynik()
{
	let x = document.getElementById("ekran").value;
	let y = eval(x);
	document.getElementById("ekran").value = y;
}

function fC()
{
	document.getElementById("ekran").value = "";
}

