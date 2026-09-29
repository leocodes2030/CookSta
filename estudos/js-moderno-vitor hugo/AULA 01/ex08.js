const produtos = [
    { nome: "Caneca", estoque: 3 },
    { nome: "Camiseta", estoque: 0 },
    { nome: "Adesivo", estoque: 7 }
];

const nomesEmEstoque = produtos
    .filter(p => p.estoque > 0)
    .map(p => p.nome);

console.log(nomesEmEstoque);