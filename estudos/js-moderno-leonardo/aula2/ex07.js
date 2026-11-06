// Questão 7: O que está errado neste código?
//
// function carregarDados() {
//     const dados = await fetch("https://exemplo.com/api");
//     console.log(dados);
// }
//
// Erro: a função usa await, mas não foi declarada como async.
// Além disso, como o await pode falhar (rede, servidor), o ideal é usar try/catch.

// Versão corrigida:
async function carregarDados() {
    try {
        const dados = await fetch("https://exemplo.com/api");
        console.log(dados);
    } catch (erro) {
        console.log("Não foi possível carregar os dados:", erro);
    }
}

carregarDados();
