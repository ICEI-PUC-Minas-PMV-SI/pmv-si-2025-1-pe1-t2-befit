// Navigation
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuButton = document.getElementById('menuButton');
    const navLinks = document.querySelector('.nav-links');

    menuButton?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });

    // Page navigation
    const navButtons = document.querySelectorAll('.nav-btn');
    const pages = document.querySelectorAll('.page');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.dataset.page;

            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Show selected page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === `${pageId}Page`) {
                    page.classList.add('active');
                }
            });
        });
    });

    // Meal type selection
    const mealOptions = document.querySelectorAll('.meal-option');
    mealOptions.forEach(option => {
        option.addEventListener('click', () => {
            option.classList.toggle('active');
        });
    });

    // Form submission
    const dietForm = document.getElementById('dietForm');
    dietForm?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const refeicoes = Array.from(document.querySelectorAll('.meal-option.active > .meal-type')).map(item => item.textContent)
        const valor_nutricional = document.getElementById('input_valor_nutricional').value;
        const observacoes = document.getElementById('input_observacoes').value;
        const orcamento = document.getElementById('input_orcamento').value;

        if (!valor_nutricional || !observacoes || !orcamento || refeicoes.length === 0) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const db = new Database('db_dieta');
        const hash = new Hash();

        const data = { refeicoes, valor_nutricional, observacoes, orcamento }
        const stringData = JSON.stringify(data)

        const hashDieta = await hash.sha1(stringData);
        if (db.getById(hashDieta)) {
            alert('Dieta já cadastrada.');
            return;
        }

        db.save({
            id: hashDieta,
            ...data
        })

        alert('Dieta cadastrada com sucesso!');

        window.location.href = "/receitas.html"
    });
});