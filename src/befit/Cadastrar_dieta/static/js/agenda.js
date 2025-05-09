// Generate calendar grid dynamically
const calendarBody = document.querySelector('.calendar-body');
if (calendarBody) {
    // Limpar calendário anterior (se houver)
    calendarBody.innerHTML = '';

    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = Janeiro, 11 = Dezembro

    // Quantos dias tem o mês atual
    const daysInMonth = new Date(year, month + 1, 0).getDate() - 1;

    // Dia da semana em que começa o mês (0 = Domingo, 6 = Sábado)
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    // Número total de células necessárias (dias + espaços em branco)
    const totalCells = Math.ceil((firstDayOfWeek + daysInMonth) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement('div');

        const dayNumber = i - firstDayOfWeek + 1;
        if (i >= firstDayOfWeek && dayNumber <= daysInMonth) {
            cell.textContent = dayNumber;
            cell.classList.add('day'); // você pode estilizar isso via CSS
        } else {
            cell.classList.add('empty'); // célula vazia para manter a grade
        }

        calendarBody.appendChild(cell);
    }
}

function addNoteToDay(dayNumber, noteText) {
    // Busca a célula que tem o número do dia
    const cells = document.querySelectorAll('.calendar-body .day');
    cells.forEach(cell => {
        if (parseInt(cell.textContent) === dayNumber) {
            const note = document.createElement('span');
            note.textContent = noteText;
            note.classList.add('recipe-title'); // Classe para estilizar
            cell.appendChild(note);
        }
    });
}

window.onload = function() {
    const db = new Database('db_agenda');
    const dados = db.getAll();
    dados.forEach(dado => {
        const dia = Number(dado.id);
        addNoteToDay(dia, dado.receita.nomeReceita);
    });
}
