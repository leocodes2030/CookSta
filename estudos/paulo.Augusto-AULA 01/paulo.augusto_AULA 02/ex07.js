async function carregarDados() {
  try {
    const resposta = await fetch("https://exemplo.com/api");
    const dados = await resposta.json();
    console.log(dados);
  } catch (erro) {
    console.error("Falha na requisição:", erro);
  }
}