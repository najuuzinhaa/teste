const prompt = require("prompt-sync")();
let produto = [
    {nome: "Lápis", preco: 1.5},
    {nome: "Caneta", preco: 2.0},
    {nome: "Borracha", preco: 0.5}
]

produto.sort((a, b) => a.preco - b.preco);
console.log("Do produto mais barato para o mais caro: ");
for (let i =0 ; i < produto.length; i++) {
console.log(produto[i].nome, "->  R$", produto[i].preco);

}

