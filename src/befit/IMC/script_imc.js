// calcular IMC

function calcularIMC() {
	const peso = parseFloat(document.getElementById("peso").value);
	const altura = parseFloat(document.getElementById("altura").value);
	
	if (isNaN(peso) || isNaN(altura) || altura === 0) {
		alert("Por favor, insira valores válidos para peso e altura.");
		return;
	}

	const imc = (peso / (altura * altura)).toFixed(1);
	const classificacao = classificarIMC(imc);
	
	
	document.querySelector("strong").innerHTML = imc + ' ' + classificacao;
	
	
	// Função para classificar o IMC
	function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade Grau 1";
    if (imc < 39.9) return "Obesidade Grau 2";
    if (imc >= 40) return "Obesidade Grau 3";
	}
		
	
	// Salva no localStorage
	const resultado = {
		imc: imc,
		classificacao: classificacao,
		data: new Date().toLocaleString()
	};
	localStorage.setItem("resultadoIMC", JSON.stringify(resultado));
}

// Limpar resultado
function limpa() {
	document.getElementById("peso").value="";
	document.getElementById("altura").value="";
	
}


// Salvar resultado no local storage

function mostrarResultadoSalvo() {
	const resultado = JSON.parse(localStorage.getItem("resultadoIMC"));
	if (resultado) {
		alert(`Último IMC calculado: ${resultado.imc} - ${resultado.classificacao} (em ${resultado.data})`);
	} else {
		alert("Nenhum resultado salvo encontrado.");
	}
}



//Explicação:
//Validação: Adicionada uma verificação simples para evitar divisão por zero ou valores inválidos.

//Objeto resultado: Armazena o IMC, a classificação e a data/hora do cálculo.

//localStorage.setItem: Salva o objeto no armazenamento local do navegador, convertendo-o para uma string JSON.

//Para recuperar o dado depois: Você pode adicionar uma função como esta, se quiser exibir o resultado salvo anteriormente: javascript Copiar Editar

