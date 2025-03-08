// 3.1
const prompt = require("prompt-sync")({ sigint: true });

let idade = prompt("Digite sua idade: ");
idade = parseInt(idade);

function verificar(idade) {
    if (idade >= 60) {
        console.log("Idoso(a)");
    } else if (idade >= 18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}


verificar(idade);