const produtos = [
{ nome: "Caneca", estoque: 3 },
{ nome: "Camiseta", estoque: 0 },
{ nome: "Adesivo", estoque: 7 }
];

console.log(`Estoque maior que 5: ${produtos.filter(produto => produto.estoque > 5).map(produto => produto.nome)}`);