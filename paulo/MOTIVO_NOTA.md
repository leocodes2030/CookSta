# Motivo da nota: Paulo

Paulo, tua nota ficou **2,40 de 4,00** no primeiro momento. Ainda tem a avaliação prática, que vale 1 ponto, então a nota final do momento sai depois dela.

| Parte | Nota |
|---|---|
| Aulas 01 a 05 | 1,40 de 2,00 |
| Atividade da Aula 05 | 0,00 de 1,00 |
| Caderno | 1,00 de 1,00 |

Cada aula vale 0,40; aula incompleta ou que não abre vale 0,20; sem entrega vale 0,00. Não houve desconto por cópia.

**Onde a nota se perdeu:** faltaram 1,60 dos 4,00. As Aulas 01 e 02 estão inteiras e o Caderno veio completo. Perderam-se 0,20 em cada uma das Aulas 03, 04 e 05, que foram entregues incompletas ou sem abrir, e 1,00 na Atividade, que não foi entregue.

## Aula 01: JavaScript moderno (0,40 de 0,40)

Arquivos: `paulo/paulo.Augusto-AULA 01/ex01.js` a `ex12.js`

Os 12 itens estão entregues, com código que roda e as respostas escritas certas: a 3 diferencia map e filter, a 10 separa `export default` de export nomeado e a 11 explica a mutação do `push`. No item 8 faltou o `filter(estoque > 0)`: o código lista o nome de todos os produtos, inclusive a Camiseta sem estoque. No item 9 está o problema das chaves, mas não a versão corrigida. Isso não custou nada.

## Aula 02: Promise e async/await (0,40 de 0,40)

Arquivos: `paulo/paulo.Augusto-AULA 02/ex01.txt` a `ex10.txt`

As 10 perguntas estão respondidas, com explicações completas, o `buscarProduto` com `setTimeout` (6), o `try/catch` com `resposta.json()` (7) e a diferença entre falha de conexão e erro HTTP, com a checagem de `resposta.ok` (9). No item 3 está o código original com `.then`, e o pedido era reescrever com async/await, então o certo seria `async function` com `try { await buscarProduto(3) } catch`. O `ex04` está com vírgula no lugar do ponto (`ex04,txt`). Nenhum dos dois custou nada.

## Aula 03: lista em JavaScript puro (0,20 de 0,40)

Arquivo: `paulo/paulo.Augusto-AULA 03/index.html`

A página abre e funciona: tem o contador, o campo, o botão Adicionar e o `desenhar()`. Faltam os 4 experimentos respondidos e o registro de 3 linhas, e isso custou 0,20. Para fechar: fazer os 4 experimentos da aula e escrever as respostas e o registro num `aula03.txt` ao lado do `index.html`.

## Aula 04: React por CDN (0,20 de 0,40)

Arquivo: `paulo/paulo.Augusto-AULA 04/index.html` (06/11)

A página carrega React, ReactDOM e Babel, mas o que aparece é só o `App` com o `<h1>`, e o `render` usa `<app />` com letra minúscula, que o React trata como uma tag HTML qualquer, então a tela fica em branco. O código do Cabecalho, dos três `Cartao` e do `App` novo está solto depois do `</html>`, fora do `<script type="text/babel">`, e nunca roda. Falta também a Lista com `map` e `key` e o registro. Isso custou 0,20. Para fechar: mover os componentes para dentro do `<script type="text/babel">`, usar `<App />` com maiúscula, acrescentar a Lista e o registro.

## Aula 05: chaves, ternário e className (0,20 de 0,40)

Arquivo: `paulo/paulo.Augusto-AULA 05/index.html` (06/11)

O conteúdo da aula aparece no código: o ternário `tarefa.feita ? "(feita)" : "(pendente)"` e o `map` com `key`. A página não abre porque o `<header>` do Cabecalho não tem o `</header>`, e o Babel para com erro de sintaxe. Faltam também o `{projeto}`, o `className`, o Fragment e o registro. Isso custou 0,20. Para fechar: fechar o `</header>`, criar `const projeto = "..."` e usar `{projeto}` no Cabecalho, trocar o `style` por uma classe com `className`, usar o Fragment e acrescentar o registro.

## Atividade da Aula 05: tela do grupo em componentes (0,00 de 1,00)

Não encontrei nenhum arquivo da atividade na tua pasta, no repositório do grupo nem nos teus repositórios pessoais. O `ATIVIDADE_AULA05.md` é o enunciado, sem nada preenchido. Faltou o componente com props, o commit próprio, o `// MEU COMPONENTE`, a página funcionando e o registro de 3 linhas, e isso custou 1,00. Para a prática: escolher um componente da tela do grupo, fazer com props em `aula05-paulo/index.html`, marcar com `// MEU COMPONENTE` e escrever as 3 linhas.

## Caderno (1,00 de 1,00)

Entregue completo.
