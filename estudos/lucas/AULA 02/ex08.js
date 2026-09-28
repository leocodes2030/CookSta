async function carregar() {
    const resposta = await fetch("https://exemplo.com/api");
    const dados = await resposta.json();
    console.log(dados);
}