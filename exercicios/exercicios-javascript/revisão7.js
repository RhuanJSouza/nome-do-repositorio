let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

let frutasMaiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutasMaiusculas);

let frutasComA = frutas.filter(fruta => fruta.startsWith("A"));
console.log(frutasComA);

let comprimentoDasFrutas = frutas.map(fruta => fruta.length);
console.log(comprimentoDasFrutas);
