const produtos = [
    {nome: "Caneca", estoque: 3},
    {nome: "Camiseta", estoque: 0},
    {nome: "Adesivo", estoque: 7}
];

console.log(`Nomes dos produtos: ${produtos.map(produto => produto.nome)}`);