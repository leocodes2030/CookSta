const buscarProduto = (id) => 
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: `Produto ${id}` });
    }, 1000);
  });