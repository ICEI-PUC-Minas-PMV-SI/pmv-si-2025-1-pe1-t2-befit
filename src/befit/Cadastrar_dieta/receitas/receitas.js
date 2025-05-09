function abrirPopup(linkClicado) {
    const texto = linkClicado.getAttribute("data-texto");
    const tipoReceita = linkClicado.getAttribute("type");

    if (tipoReceita === "panqueca") {
        document.getElementById("contentPanqueca").style.display = "flex";
        document.getElementById("contentBerinjela").style.display = "none";
        document.getElementById("contentPudim").style.display = "none";
        document.getElementById("contentRolinho").style.display = "none";

    } else if (tipoReceita === "berinjela") {
        document.getElementById("contentPanqueca").style.display = "none";
        document.getElementById("contentBerinjela").style.display = "flex";
        document.getElementById("contentPudim").style.display = "none";
        document.getElementById("contentRolinho").style.display = "none";

    } else if (tipoReceita === "pudim") {
        document.getElementById("contentPanqueca").style.display = "none";
        document.getElementById("contentBerinjela").style.display = "none";
        document.getElementById("contentPudim").style.display = "flex";
        document.getElementById("contentRolinho").style.display = "none";

    } else if (tipoReceita === "rolinho") {
        document.getElementById("contentPanqueca").style.display = "none";
        document.getElementById("contentBerinjela").style.display = "none";
        document.getElementById("contentPudim").style.display = "none";
        document.getElementById("contentRolinho").style.display = "flex";
    }

    document.getElementById("popupTitle").innerText = texto;
    document.getElementById("popupOverlay").style.display = "flex";
}

function fecharPopup() {
    document.getElementById("popupOverlay").style.display = "none";
}

window.onload = function () {
    const tabela = document.getElementById("tabelaReceitas");
    const linhas = tabela.getElementsByTagName("tbody")[0].rows;

    for (let i = 0; i < linhas.length; i++) {
      const celulaStatus = linhas[i].cells[3]; // Coluna "Favorita"
      const valor = celulaStatus.textContent.trim().toLowerCase();
      const img = document.createElement("img");

      if (valor === "true") {
        img.src = "../imgs/estrela-true.png";
        img.alt = "true";
      } else {
        img.src = "../imgs/estrela-false.png";
        img.alt = "false";
      }

      img.width = 25;
      celulaStatus.textContent = ""; // Limpa o texto
      celulaStatus.appendChild(img); // Adiciona a imagem
    }
  };