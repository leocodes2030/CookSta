const produtos = [
    { nome: "Caneca", estoque: 3 },
    { nome: "Camiseta", estoque: 0 },
    { nome: "Adesivo", estoque: 7 }
];

const nomesEmEstoque = produtos
    .filter(produto => produto.estoque > 0)
    .map(produto => produto.nome);

console.log(`Nomes dos produtos em estoque: ${nomesEmEstoque}`);