function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: id,
        nome: "Produto " + id
      });
    }, 1000);
  });
}