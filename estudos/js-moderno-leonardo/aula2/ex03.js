// Questão 3: Reescreva usando async/await o código que usa .then

// Função de apoio (a mesma da questão 6), só para o exemplo rodar
function buscarProduto(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nome: "Produto " + id });
        }, 1000);
    });
}

// Versão original, com .then:
// buscarProduto(3)
//     .then((produto) => console.log(produto))
//     .catch((erro) => console.log(erro));

// Versão com async/await (o .catch vira try/catch):
async function mostrarProduto() {
    try {
        const produto = await buscarProduto(3);
        console.log(produto);
    } catch (erro) {
        console.log(erro);
    }
}

mostrarProduto();
