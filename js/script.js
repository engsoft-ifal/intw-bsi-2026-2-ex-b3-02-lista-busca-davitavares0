// Dados prontos — não precisa mudar.
const cursos = [
  { nome: "HTML", area: "Estrutura" },
  { nome: "CSS", area: "Estilo" },
  { nome: "JavaScript", area: "Comportamento" },
];

const lista = document.querySelector("#lista");
const busca = document.querySelector("#busca");

// TODO 1: escreva a função render(filtro) que preenche a #lista com um <li>
//         para cada curso cujo NOME contenha o filtro (use filter + map).
//         Se nenhum curso passar, mostre um <li> com "Nada encontrado".
//
// TODO 2: chame render() ao carregar a página e a cada evento "input" na busca.

const lista = document.querySelector("#lista");

function render(filtro) {
  const termo = filtro.toLowerCase();

  const itens = cursos
    .filter(curso => curso.nome.toLowerCase().includes(termo))
    .map(curso => `<li>${curso.nome}</li>`);

  if (itens.length === 0) {
    lista.innerHTML = "<li>Nada encontrado</li>";
  } else {
    lista.innerHTML = itens.join("");
  }
}

const busca = document.querySelector("#busca");

render("");  // ao carregar: filtro vazio mostra todos os cursos

busca.addEventListener("input", () => {
  render(busca.value);
});

// escreva seu código aqui
