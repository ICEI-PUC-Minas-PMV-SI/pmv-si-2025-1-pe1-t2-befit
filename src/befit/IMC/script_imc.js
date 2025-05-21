

	// Função para calcular o IMC
	function calcularIMC() {
		const peso = parseFloat(document.getElementById("peso").value);
		const altura = parseFloat(document.getElementById("altura").value);
		
		const imc = (peso / (altura * altura)).toFixed(1);
		document.querySelector("strong").innerHTML = imc + ' ' + classificarIMC(imc);
	}

	function limpa() {
		document.getElementById("peso").value="";
		document.getElementById("altura").value="";
		
	}
	
	// Função para classificar o IMC
	function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade Grau 1";
    if (imc < 39.9) return "Obesidade Grau 2";
    if (imc >= 40) return "Obesidade Grau 3";
	}

		
