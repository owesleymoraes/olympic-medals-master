


const urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises"

fetch(urlSite)
    .then(response => response.json())
    .then(data => tratarDadosMedalhas(data))


let quadroMedalhas = document.querySelector(".quadro-medalhas")


function criarTemplateLinha(colocacao, country, flag_url, medal_ouro, medal_prata, medal_bronze) {


    //Criando linha do quadro de países.
    let linha = document.createElement("div")
    //adicionando classe para a div linha.
    linha.classList.add("linha")

    //Colunas
    let coluna_rank = criaColunaRank(`${colocacao}º`)
    let coluna_country = criaColunaCountry(country, flag_url)
    let ouro = criaMedalhaDeOuro(medal_ouro)
    let prata = criaMedalhaDePrata(medal_prata)
    let bronze = criaMedalhaDeBronze(medal_bronze)
    let totalMedadlhas = medal_ouro + medal_prata + medal_bronze
    let total = criaColunaTotal(totalMedadlhas)

    //linkando html
    linha.appendChild(coluna_rank)
    linha.appendChild(coluna_country)
    linha.appendChild(ouro)
    linha.appendChild(prata)
    linha.appendChild(bronze)
    linha.appendChild(total)

    quadroMedalhas.appendChild(linha)
    console.log(linha)

}

function tratarDadosMedalhas(arrayPaises) {
    let paisesOrdenados = ordenaPaises(arrayPaises)
    for (let indice = 0  ; indice < paisesOrdenados.length; indice++) {
        let pais = paisesOrdenados[indice]

        criarTemplateLinha(
            indice + 1,
            pais.country,
            pais.flag_url,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze
        )

    }
}

function ordenaPaises(arrayPaises) {
    let newArrayPaises = arrayPaises.map(somarTotal).sort((a, b) => b.medal_gold - a.medal_gold)
    return newArrayPaises
}

function somarTotal(pais) {
    return pais
}


//Função que cria a coluna rank
function criaColunaRank(rank) {
    //Colunas

    //Coluna - Rank
    let coluna_rank = document.createElement("div")

    //adicionando classe para a div coluna-rank.
    coluna_rank.classList.add("coluna", "coluna-rank")

    //Criando span titolo rank
    let coluna_rank_titulo = document.createElement("span")
    coluna_rank_titulo.innerText = rank

    //linkando html
    coluna_rank.appendChild(coluna_rank_titulo)

    return coluna_rank
}

//Função que cria a coluna country
function criaColunaCountry(country, flag_url) {

    //Coluna - country
    let coluna_country = document.createElement("div")

    //adicionando classe para a div coluna-rank.
    coluna_country.classList.add("coluna", "coluna-country")

    //Criando span imagem country
    let coluna_country_img = document.createElement("img")
    coluna_country_img.src = flag_url
    coluna_country_img.alt = country
    //Criando span titulo country
    let coluna_country_titulo = document.createElement("span")
    coluna_country_titulo.innerText = country

    //linkando html
    coluna_country.appendChild(coluna_country_img)
    coluna_country.appendChild(coluna_country_titulo)

    return coluna_country
}

//Função que cria a coluna medalha de ouro
function criaMedalhaDeOuro(ouro) {
    //Colunas

    //Coluna - medalha de ouro
    let coluna_medal_ouro = document.createElement("div")

    //adicionando classe para a div coluna-ouro.
    coluna_medal_ouro.classList.add("coluna", "medalha_ouro")

    //Criando span titolo ouro
    let coluna_medal_titulo = document.createElement("span")
    coluna_medal_titulo.innerText = ouro

    //linkando html
    coluna_medal_ouro.appendChild(coluna_medal_titulo)

    return coluna_medal_ouro
}

//Função que cria a coluna medalha de prata
function criaMedalhaDePrata(prata) {
    //Colunas

    //Coluna - medalha de prata
    let coluna_medal_prata = document.createElement("div")

    //adicionando classe para a div coluna-prata.
    coluna_medal_prata.classList.add("coluna", "medalha_prata")

    //Criando span titolo prata
    let coluna_medal_titulo = document.createElement("span")
    coluna_medal_titulo.innerText = prata

    //linkando html
    coluna_medal_prata.appendChild(coluna_medal_titulo)

    return coluna_medal_prata
}

//Função que cria a coluna medalha de bronze
function criaMedalhaDeBronze(bronze) {
    //Colunas

    //Coluna - medalha de bronze
    let coluna_medal_bronze = document.createElement("div")

    //adicionando classe para a div coluna-bronze.
    coluna_medal_bronze.classList.add("coluna", "medalha_bronze")

    //Criando span titolo bronze
    let coluna_medal_titulo = document.createElement("span")
    coluna_medal_titulo.innerText = bronze

    //linkando html
    coluna_medal_bronze.appendChild(coluna_medal_titulo)

    return coluna_medal_bronze
}

//Função que cria a coluna total
function criaColunaTotal(total) {
    //Colunas

    //Coluna - total
    let coluna_total = document.createElement("div")

    //adicionando classe para a div coluna-bronze.
    coluna_total.classList.add("coluna", "total")

    //Criando span titolo bronze
    let coluna_total_titulo = document.createElement("span")
    coluna_total_titulo.innerText = total

    //linkando html
    coluna_total.appendChild(coluna_total_titulo)

    return coluna_total
}


