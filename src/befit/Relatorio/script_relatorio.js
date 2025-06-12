
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



//função resultado Receita

//function listarAgenda() {
  //const dados = JSON.parse(localStorage.getItem('db_agenda') || '[]');
  //dados.forEach((item, index) => {
    //console.log(`--- Receita ${index + 1} ---`);
    //console.log(item);
  //});
  //return dados;
//}

//função resultado Receita

function listarAgenda() {
  const dados = JSON.parse(localStorage.getItem('db_agenda') || '[]');

  // Seleciona o elemento da página onde os dados serão exibidos
  const container = document.getElementById('listaAgenda');
  container.innerHTML = ''; // Limpa conteúdo anterior, se houver

  dados.forEach((item, index) => {
    // Exibe no console (opcional)
    console.log(`--- Receita ${index + 1} ---`);
    console.log(item);
	
	const textoSemChaves = JSON.stringify(item, null, 2).replace(/[{}",]/g, ' ');
	
    // Cria um elemento para exibir na página
    const receitaDiv = document.createElement('div');
    receitaDiv.innerHTML = `
      <h4>Receita ${index + 1}</h4>
      <pre>${textoSemChaves}</pre>
      <hr/>
    `;
    container.appendChild(receitaDiv);
  });

  return dados;
}