
function Investimento(){
	let v1 = parseFloat(document.querySelector("#v1").value);
	let v2 = parseFloat(document.querySelector("#v2").value);
	let v3 = parseFloat(document.querySelector("#v3").value);
	const retorno = (v1 * (1 + v2 )) * v3;
	document.querySelector("#resultado").innerHTML= "O resultado é: " + retorno;
}














