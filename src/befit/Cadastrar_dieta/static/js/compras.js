function printDiv(divId) {
    var content = document.getElementById(divId).innerHTML;
    var myWindow = window.open('', '', 'width=800,height=600');
    myWindow.document.write('<html><head><title>Imprimir</title>');
    myWindow.document.write('<style>@media print { body { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }</style>');
    myWindow.document.write('</head><body>');
    myWindow.document.write(content);
    myWindow.document.write('</body></html>');
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    myWindow.close();
}

function ComponenteCard({receita}) {
    return `
    <div class="recipe-card">
        <div class="recipe-content">
            <div class="recipe-title">${receita.nomeReceita}</div>
            <div class="recipe-ingredients">
                <ul style="list-style-type: disc; padding-left: 0; margin-left: 20px; color: #555;">
                ${receita.Ingredientes.map(i => `<li>${i.nome} - ${i.quantidade}</li>`).join("")}        
                </ul>
            </div>
        </div>
    </div>`
}


window.onload = function() {
    const db = new Database('db_agenda')
    const compras = db.getAll()
    console.log(compras)
    document.getElementsByClassName('recipe-list')[0].innerHTML = compras.map(ComponenteCard).join("")
}