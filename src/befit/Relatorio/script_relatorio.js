
//Relatório

let tipoRelatorio = '';

          function irParaPeriodo(tipo) {
            tipoRelatorio = tipo;
            mostrarTela('periodo');
          }

          function irParaFinal() {
            const checkboxes = document.querySelectorAll('input[name="periodo"]:checked');
            const periodos = Array.from(checkboxes).map(cb => cb.value);

            if (periodos.length === 0) {
              alert("Selecione ao menos um período.");
              return;
            }

            document.getElementById("titulo-relatorio").innerText = `Relatório de ${tipoRelatorio.toUpperCase()}`;
            document.getElementById("resumo-relatorio").innerText = `Períodos selecionados: ${periodos.join(', ')}`;
            mostrarTela('final');
          }
		  

          function mostrarTela(id) {
            document.querySelectorAll('.section').forEach(div => div.classList.remove('active'));
            document.getElementById(id).classList.add('active');
          }

          async function salvarPDF() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            const titulo = document.getElementById("titulo-relatorio").innerText;
            const resumo = document.getElementById("resumo-relatorio").innerText;

            doc.setFontSize(18);
            doc.text(titulo, 10, 20);
            doc.setFontSize(12);
            doc.text(resumo, 10, 30);

            doc.save("relatorio.pdf");
          }
		  
		  //função resultado IMC
		  
		  function mostrarResultadoSalvo() {
			const resultado = JSON.parse(localStorage.getItem("resultadoIMC"));
			if (resultado) {
				document.getElementById("valor-imc").innerHTML = (`Último IMC calculado: ${resultado.imc} - ${resultado.classificacao} (em ${resultado.data})`);
			} else {
				alert("Nenhum resultado salvo encontrado.");
			}
		 }
