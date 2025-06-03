let receitasOrdenadas = [...receitas];
let ordemAtual = {};

window.onload = function () {
  renderizarTabela();
};

function renderizarTabela() {
  const corpoTabela = document.getElementById('table-body');
  corpoTabela.innerHTML = '';

  receitasOrdenadas.forEach(receita => {
    const row = document.createElement('tr');

    Object.entries(receita).forEach(([chave, valor]) => {
      if (!['ingredientes', 'modoPreparo', 'unidadePreparo'].includes(chave)) {
        const cell = document.createElement('td');

        switch (chave) {
          case 'nome':
            criarCelulaColunaNome(cell, valor, receita.modoPreparo);
            break;
          case 'tempoPreparo':
            cell.textContent = valor + " " + receita.unidadePreparo;
            break;
          case 'favorita':
            criarCelulaColunaFavorita(cell, valor);
            break;
          default:
            cell.textContent = valor;
        }

        row.appendChild(cell);
      }
    });

    corpoTabela.appendChild(row);
  });
}

function criarCelulaColunaNome(cell, valor, modoPreparo) {
  const link = document.createElement("a");
  link.href = '#';
  link.textContent = valor;
  link.setAttribute('modoPreparo', modoPreparo)
  link.onclick = function () {
    abrirPopup(this);
    return false;
  };
  cell.appendChild(link);
}

function criarCelulaColunaFavorita(cell, valor) {
  const img = document.createElement("img");
  img.onclick = function () {
    clicarEstrela(this);
    return false;
  };

  if (valor === true) {
    img.src = "../imgs/estrela-true.png";
    img.alt = "true";
  } else {
    img.src = "../imgs/estrela-false.png";
    img.alt = "false";
  }

  img.width = 25;
  cell.textContent = ""; 
  cell.appendChild(img);

}

function abrirPopup(linkClicado) {
  const texto = linkClicado.textContent;
  const modoPreparo = linkClicado.getAttribute("modoPreparo");

  document.getElementById("popupTitle").innerText = texto;
  document.getElementById("modoPreparo").innerText = modoPreparo;
  document.getElementById("popupReceitas").style.display = "flex";
}

function clicarEstrela(estrelaClicada) {
  const alt = estrelaClicada.alt;

  if (alt == "true") {
    estrelaClicada.src = "../imgs/estrela-false.png";
    estrelaClicada.alt = "false";
  } else {
    estrelaClicada.src = "../imgs/estrela-true.png";
    estrelaClicada.alt = "true";
  }
}

function abrirPopupInfo() {
  fecharPopup("popupReceitas")
  document.getElementById("popupAgenda").style.display = "flex";
}


function fecharPopup(idName) {
  document.getElementById(idName).style.display = "none";
}

function ordenarTabela(indiceColuna) {
  const chaves = ['nome', 'tempoPreparo', 'complexidade', 'favorita'];
  const chave = chaves[indiceColuna];

  ordemAtual[chave] = ordemAtual[chave] === 'asc' ? 'desc' : 'asc';

  receitasOrdenadas.sort((a, b) => {
    let valA = a[chave];
    let valB = b[chave];

    if (typeof valA === 'string') valA = valA.toLowerCase();
    if (typeof valB === 'string') valB = valB.toLowerCase();

    if (valA < valB) return ordemAtual[chave] === 'asc' ? -1 : 1;
    if (valA > valB) return ordemAtual[chave] === 'asc' ? 1 : -1;
    return 0;
  });

  renderizarTabela();
}


