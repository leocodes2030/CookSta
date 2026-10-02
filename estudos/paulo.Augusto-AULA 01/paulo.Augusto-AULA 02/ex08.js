const carregar = async () => {
  const dados = await fetch("https://exemplo.com/api").then((res) => res.json());
  console.log(dados);
};