let numeros = [10, 20, 30, 40, 50];

numeros.push(60);
console.log(numeros);

numeros.shift();
console.log(numeros);

let maiorNumero = Math.max(...numeros);
console.log(maiorNumero);

let menorNumero = Math.min(...numeros);
console.log(menorNumero);
