
// Função principal para mostrar o relatório
function mostrarRelatorio() {
    document.getElementById('relatorio').style.display = 'none';
    document.getElementById('final').style.display = 'block';
    carregarReceitasDoLocalStorage();
    mostrarUltimoIMC(); // Opcional: já mostra o IMC automaticamente
}

// Carrega receitas do localStorage e exibe
function mostrarReceitas() {
    const dados = JSON.parse(localStorage.getItem('db_agenda') || '[]');
    dados.forEach((item, index) => {
        console.log(`--- Receita ${index + 1} ---`);
        console.log(item);
    });
    return dados;
}

// Mostra o último IMC calculado
function mostrarUltimoIMC() {
    const resultadoIMC = JSON.parse(localStorage.getItem('resultadoIMC'));
    const valorIMCElement = document.getElementById('valor-imc');

    if (resultadoIMC) {
        valorIMCElement.innerHTML = `
            <strong>Último IMC:</strong> ${resultadoIMC.imc} (${resultadoIMC.classificacao})<br>
            <small>Calculado em: ${resultadoIMC.data}</small>
        `;
    } else {
        valorIMCElement.textContent = 'Nenhum IMC registrado.';
    }
}


//Codigo da pagina
  function mostrarRelatorio() {
    document.getElementById('relatorio').style.display = 'none';
    document.getElementById('final').style.display = 'block';
    carregarRelatorio();
  }

  function carregarRelatorio() {
    let receitasSelecionadas = JSON.parse(localStorage.getItem('receitasSelecionadas')) || [];
    let container = document.getElementById('relatorio-container');

    if (receitasSelecionadas.length === 0) {
      container.innerHTML = '<p>Nenhuma receita selecionada.</p>';
      return;
    }

    let html = '';
    receitasSelecionadas.forEach(receita => {
      html += `
        <div class="receita" style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
          <h4>${receita.nome}</h4>
          <p><strong>Tempo de preparo:</strong> ${receita.tempoPreparo} ${receita.unidadePreparo}</p>
          <h5>Ingredientes:</h5>
          <ul>
            ${receita.ingredientes.map(i => `<li>${i.quantidade} ${i.medida} de ${i.nome}</li>`).join('')}
          </ul>
          <h5>Modo de Preparo:</h5>
          <p>${receita.modoPreparo}</p>
        </div>
      `;
    });
    container.innerHTML = html;
  }
