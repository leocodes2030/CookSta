const p = { titulo: "Caneca", preco: 25 };

const pEmPromocao = { ...p, preco: 20 };

console.log(`Título: ${pEmPromocao.titulo}, Preço: ${pEmPromocao.preco}`);