// Questão 8: Complete o trecho para imprimir o corpo da resposta já convertido em objeto

async function carregar() {
    const resposta = await fetch("https://exemplo.com/api");
    const dados = await resposta.json(); // .json() também devolve uma Promise, por isso o await
    console.log(dados);
}

carregar();
