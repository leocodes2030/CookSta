async function carregarDados() {
  const dados = await fetch("https://exemplo.com/api");
  console.log(dados);
}
//a função não foi declarada como async