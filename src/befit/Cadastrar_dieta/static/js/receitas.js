const receitas = [
    {
        "nomeReceita": "Panqueca de Aveia e Banana",
        "descricao": "Panqueca saudável sem farinha de trigo, ideal para o café da manhã fitness.",
        "score": 4.8,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Aveia em flocos", "quantidade": "1 xícara" },
            { "nome": "Banana madura", "quantidade": "1 unidade" },
            { "nome": "Ovo", "quantidade": "1 unidade" },
            { "nome": "Canela em pó", "quantidade": "1/2 colher de chá" }
        ]
    },
    {
        "nomeReceita": "Salada de Grão-de-Bico com Atum",
        "descricao": "Rica em proteínas e fibras, ótima para um almoço leve.",
        "score": 4.7,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Grão-de-bico cozido", "quantidade": "1 xícara" },
            { "nome": "Atum em água", "quantidade": "1 lata" },
            { "nome": "Cebola roxa", "quantidade": "1/2 unidade" },
            { "nome": "Tomate picado", "quantidade": "1 unidade" },
            { "nome": "Azeite de oliva", "quantidade": "1 colher de sopa" },
            { "nome": "Limão", "quantidade": "1 unidade" }
        ]
    },
    {
        "nomeReceita": "Smoothie Verde Detox",
        "descricao": "Bebida refrescante e rica em fibras para ajudar na desintoxicação.",
        "score": 4.6,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Couve", "quantidade": "2 folhas" },
            { "nome": "Abacaxi", "quantidade": "1 fatia" },
            { "nome": "Gengibre", "quantidade": "1 pedaço pequeno" },
            { "nome": "Água de coco", "quantidade": "1 copo" }
        ]
    },
    {
        "nomeReceita": "Peito de Frango Grelhado com Brócolis",
        "descricao": "Prato proteico e baixo em carboidratos, ótimo para pós-treino.",
        "score": 4.9,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Peito de frango", "quantidade": "200 g" },
            { "nome": "Brócolis cozido", "quantidade": "1 xícara" },
            { "nome": "Sal", "quantidade": "a gosto" },
            { "nome": "Pimenta", "quantidade": "a gosto" },
            { "nome": "Azeite", "quantidade": "1 colher de sopa" }
        ]
    },
    {
        "nomeReceita": "Omelete de Claras com Espinafre",
        "descricao": "Baixa em calorias e rica em proteínas, ideal para dietas restritivas.",
        "score": 4.5,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Claras de ovo", "quantidade": "4 unidades" },
            { "nome": "Espinafre picado", "quantidade": "1 xícara" },
            { "nome": "Sal", "quantidade": "a gosto" },
            { "nome": "Azeite", "quantidade": "1 colher de chá" }
        ]
    },
    {
        "nomeReceita": "Wrap Integral de Frango",
        "descricao": "Refeição prática e saudável com pão integral e frango grelhado.",
        "score": 4.6,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Pão folha integral", "quantidade": "1 unidade" },
            { "nome": "Frango desfiado", "quantidade": "100 g" },
            { "nome": "Alface", "quantidade": "2 folhas" },
            { "nome": "Tomate", "quantidade": "2 fatias" },
            { "nome": "Iogurte natural", "quantidade": "1 colher de sopa" }
        ]
    },
    {
        "nomeReceita": "Crepioca Fit",
        "descricao": "Rápida, leve e versátil, feita com goma de tapioca e ovo.",
        "score": 4.7,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Goma de tapioca", "quantidade": "2 colheres de sopa" },
            { "nome": "Ovo", "quantidade": "1 unidade" },
            { "nome": "Sal", "quantidade": "a gosto" },
            { "nome": "Queijo cottage", "quantidade": "2 colheres de sopa" }
        ]
    },
    {
        "nomeReceita": "Chips de Batata Doce",
        "descricao": "Petisco crocante e saudável, assado e sem óleo.",
        "score": 4.4,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Batata-doce", "quantidade": "1 unidade" },
            { "nome": "Sal", "quantidade": "a gosto" },
            { "nome": "Páprica", "quantidade": "1/2 colher de chá" }
        ]
    },
    {
        "nomeReceita": "Salada de Quinoa com Legumes",
        "descricao": "Fonte completa de proteínas vegetais e fibras, leve e saborosa.",
        "score": 4.8,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Quinoa", "quantidade": "1 xícara" },
            { "nome": "Tomate cereja", "quantidade": "1/2 xícara" },
            { "nome": "Pepino", "quantidade": "1/2 unidade" },
            { "nome": "Cenoura ralada", "quantidade": "1/2 xícara" },
            { "nome": "Limão", "quantidade": "1 unidade" },
            { "nome": "Azeite", "quantidade": "1 colher de sopa" }
        ]
    },
    {
        "nomeReceita": "Iogurte Natural com Granola",
        "descricao": "Lanche rápido e equilibrado, ideal para o café da manhã ou tarde.",
        "score": 4.5,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Iogurte natural", "quantidade": "1 pote" },
            { "nome": "Granola sem açúcar", "quantidade": "3 colheres de sopa" },
            { "nome": "Mel", "quantidade": "1 colher de chá" }
        ]
    },
    {
        "nomeReceita": "Peito de Peru Defumado com Cottage",
        "descricao": "Prato proteico e baixo em carboidratos, perfeito para um lanche rápido.",
        "score": 4.4,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Peito de peru defumado", "quantidade": "3 fatias" },
            { "nome": "Queijo cottage", "quantidade": "3 colheres de sopa" },
            { "nome": "Orégano", "quantidade": "a gosto" }
        ]
    },
    {
        "nomeReceita": "Salada Caprese Light",
        "descricao": "Versão leve e fresca da clássica salada italiana com muçarela de búfala light.",
        "score": 4.6,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Tomate", "quantidade": "2 unidades" },
            { "nome": "Muçarela de búfala light", "quantidade": "100 g" },
            { "nome": "Manjericão", "quantidade": "folhas a gosto" },
            { "nome": "Azeite de oliva", "quantidade": "1 colher de sopa" },
            { "nome": "Sal e pimenta", "quantidade": "a gosto" }
        ]
    },
    {
        "nomeReceita": "Bolinhos de Abobrinha Assados",
        "descricao": "Bolinho fit feito no forno, ótimo para lanche saudável.",
        "score": 4.5,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Abobrinha ralada", "quantidade": "2 xícaras" },
            { "nome": "Ovo", "quantidade": "1 unidade" },
            { "nome": "Aveia em flocos", "quantidade": "3 colheres de sopa" },
            { "nome": "Sal", "quantidade": "a gosto" },
            { "nome": "Pimenta", "quantidade": "a gosto" }
        ]
    },
    {
        "nomeReceita": "Tapioca Proteica",
        "descricao": "Receita simples e rica em proteínas, ideal para pré ou pós-treino.",
        "score": 4.7,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Goma de tapioca", "quantidade": "3 colheres de sopa" },
            { "nome": "Ovo", "quantidade": "1 unidade" },
            { "nome": "Queijo cottage", "quantidade": "2 colheres de sopa" }
        ]
    },
    {
        "nomeReceita": "Salada de Frango com Abacate",
        "descricao": "Refeição completa e saudável, rica em proteínas e gorduras boas.",
        "score": 4.8,
        "imagem": "https://api.iconify.design/lucide:image.svg",
        "Ingredientes": [
            { "nome": "Peito de frango grelhado", "quantidade": "150 g" },
            { "nome": "Abacate", "quantidade": "1/2 unidade" },
            { "nome": "Alface", "quantidade": "2 xícaras" },
            { "nome": "Tomate cereja", "quantidade": "1/2 xícara" },
            { "nome": "Limão", "quantidade": "1 unidade" }
        ]
    }
]

function StartComponent(number) {
    let mark = "★"
    let unmark = "☆"
    let star = ""
    for (let i = 0; i < 5; i++) {
        if (i < number) {
            star += mark
        } else {
            star += unmark
        }
    }
    return `
    <div class="star-rating">
        ${star}
    </div>
    `
}

function AdicionarAgenda(nomeReceita) {
    const db = new Database('db_agenda')
    const receita = receitas.find(r => r.nomeReceita === nomeReceita)
    var number = (function ask() {
        var n = prompt('Informe o dia de 1 a 30:');
        return isNaN(n) || +n > 30 || +n < 1 ? ask() : n;
    }());

    if (db.getById(number)) {
        alert('Agenda ja ta cadastrada nesse dia')
        return;
    }

    db.save({
        id: number,
        receita,
    })
   
    alert("Receita adicionada a agenda, no dia " + number)

    const ok = confirm("Deseja ver a agenda?")
    if (ok) {
        window.location.href = "/agenda.html"
    }
}

function CardReceita(receita) {
    return `
    <div class="recipe-card">
        <div class="recipe-image">
            <img src="${receita.imagem}" alt="Recipe">
        </div>
        <div class="recipe-content">
            <div class="recipe-title">${receita.nomeReceita}</div>
            <div class="recipe-description">${receita.descricao}</div>
            <div class="star-rating">${StartComponent(receita.score)}</div>
            <button class="btn-primary" onclick="AdicionarAgenda('${receita.nomeReceita}')">Adicionar à Agenda</button>
        </div>
    </div>
    `
}


window.onload = function () {
    const quantidade = getRamdomInt(receitas)
    const randomReceitas = getRandomItems(receitas, quantidade)
    document.getElementsByClassName('recipe-list')[0].innerHTML = randomReceitas.map(CardReceita).join("")
}