let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
};

pessoa.profissao = "Médico";
delete pessoa.cidade;

let propriedades = Object.keys(pessoa);
console.log(propriedades);