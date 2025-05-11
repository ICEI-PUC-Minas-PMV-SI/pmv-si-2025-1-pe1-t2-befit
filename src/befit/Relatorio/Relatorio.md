<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BeFit - Relatórios</title>
  <link rel="stylesheet" href="style_befit.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f5;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    .header {
      background-color: white;
      padding: 15px 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }

    .logo {
      height: 60px;
    }

    .menu-desktop ul {
      list-style: none;
      display: flex;
      gap: 20px;
      margin: 0;
      padding: 0;
      align-items: center;
    }

    .menu-desktop li {
      display: inline;
    }

    .menu-desktop a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
    }

    .search-container input {
      padding: 5px;
    }

    .search-container button {
      background: none;
      border: none;
      cursor: pointer;
    }

    h1, h2 {
      color: #48632a;
      margin-bottom: 10px;
    }

    .section {
      display: none;
      padding: 40px;
    }

    .active {
      display: block;
    }

    button {
      background-color: #4e7d3b;
      color: white;
      border: none;
      padding: 15px 30px;
      font-size: 16px;
      border-radius: 20px;
      cursor: pointer;
      margin: 10px;
    }

    label {
      display: block;
      margin: 10px;
      font-size: 20px;
      color: #48632a;
    }

    #pdf-content {
      margin-top: 30px;
      font-size: 18px;
      border: 1px solid #ccc;
      padding: 20px;
      background: white;
      display: inline-block;
      text-align: left;
    }

    .footer {
      background-color: #eee;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      margin-top: 50px;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <div class="header">
    <img src="imgs/Logo_Befit.png" alt="Logo BeFit" class="logo">
    <div class="menu-desktop">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Saúde</a></li>
        <li><a href="#">Bem-estar</a></li>
        <li><a href="#">Dietas</a></li>
        <li><a href="#">Receitas</a></li>
        <li><a href="#">Agenda</a></li>
        <li><a href="#">IMC</a></li>
        <li>
          <form class="search-container" action="#" method="get">
            <input type="text" name="q" placeholder="Pesquisar...">
            <button type="submit" title="Buscar">
              <img src="imgs/lupa.svg" alt="lupa" height="16" />
            </button>
          </form>
        </li>
      </ul>
    </div>
  </div>

  <!-- Tela 1: Relatório -->
  <div id="relatorio" class="section active">
    <h1>RELATÓRIO</h1>
    <h2>CONSUMO</h2>
    <button onclick="irParaPeriodo('consumo')">GERAR RELATÓRIO</button>
    <h2>IMC</h2>
    <button onclick="irParaPeriodo('imc')">GERAR RELATÓRIO</button>
  </div>

  <!-- Tela 2: Período -->
  <div id="periodo" class="section">
    <h1>PERÍODO</h1>
    <form id="form-periodo">
      <label><input type="checkbox" name="periodo" value="Diário"> Diário</label>
      <label><input type="checkbox" name="periodo" value="Semanal"> Semanal</label>
      <label><input type="checkbox" name="periodo" value="Mensal"> Mensal</label>
      <label><input type="checkbox" name="periodo" value="Anual"> Anual</label>
    </form>
    <button onclick="irParaFinal()">GERAR RELATÓRIO</button>
  </div>

  <!-- Tela 3: Final -->
  <div id="final" class="section">
    <h1>RELATÓRIO GERADO</h1>
    <button onclick="salvarPDF()">SALVAR EM PDF</button>
    <button onclick="window.print()">IMPRIMIR</button>

    <div id="pdf-content">
      <h2 id="titulo-relatorio"></h2>
      <p id="resumo-relatorio"></p>
    </div>
  </div>

  <!-- Footer -->
  <div class="footer">
    <p>Copyright 2025 - BeFit - Todos os direitos reservados</p>
  </div>

  <!-- jsPDF para gerar PDF -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
  <script>
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
  </script>

</body>
</html>

