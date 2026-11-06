// Questão 6: função buscarProduto que recebe um id, espera 1 segundo
// e devolve o objeto { id, nome: "Produto " + id }

function buscarProduto(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, nome: "Produto " + id });
        }, 1000);
    });
}

// Teste
buscarProduto(5).then((produto) => console.log(produto));
