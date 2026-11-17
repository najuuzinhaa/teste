const notas = [7, 5, 9, 4, 8];

let soma = 0;
let maior = notas[0];

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];

    if (notas[i] > maior) {
        maior = notas[i];
    }
}

let media = soma / notas.length;

console.log("Média:", media);
console.log("Maior nota:", maior);

if (media >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

