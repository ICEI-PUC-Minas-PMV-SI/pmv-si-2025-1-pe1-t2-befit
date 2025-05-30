window.onload = function () {
  const corpoTabela = document.getElementById('table-body');

  receitas.forEach(receita => {
    const row = document.createElement('tr');

    console.log(receita)

    Object.entries(receita).forEach(([nome, valor]) => {
      if (nome !== 'ingredientes' && nome !== 'modoPreparo') {
        const cell = document.createElement('td');
        if (nome === 'nome') {
          const link = document.createElement("a");
          link.href = '#';
          link.textContent = valor;
          link.setAttribute('modoPreparo', receita.modoPreparo)
          link.onclick = function () {
            abrirPopup(this);
            return false;
          };
          cell.appendChild(link);
        }
        else if (nome === 'favorita') {
          const img = document.createElement("img");

          if (valor === true) {
            img.src = "../imgs/estrela-true.png";
            img.alt = "true";
          } else {
            img.src = "../imgs/estrela-false.png";
            img.alt = "false";
          }

          img.width = 25;
          cell.textContent = ""; // Limpa o texto
          cell.appendChild(img);
        } else {
          cell.textContent = valor;
        }

        row.appendChild(cell);
      }
    });

    corpoTabela.appendChild(row);
  });
};

function abrirPopup(linkClicado) {
  const texto = linkClicado.textContent;
  const modoPreparo = linkClicado.getAttribute("modoPreparo");

  document.getElementById("popupTitle").innerText = texto;
  document.getElementById("modoPreparo").innerText = modoPreparo;
  document.getElementById("popupReceitas").style.display = "flex";
}
function abrirPopupInfo() {
  fecharPopup("popupReceitas")
  document.getElementById("popupAgenda").style.display = "flex";
}


function fecharPopup(idName) {
  document.getElementById(idName).style.display = "none";
}


