let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien",
    ano: 1954
};

let { titulo, autor } = livro;

function obterDetalhes(livro) {
    return `Título: ${livro.titulo}, Autor: ${livro.autor}`;
}

console.log(obterDetalhes(livro));