const prompt = require("prompt-sync")();
const reservas = ["Ana", "Bia", "Caio"]
const nome = prompt("Insira o nome do aluno: ")
if (reservas.includes(nome)) {
    console.log("Já está na fila!");
    console.log("Posição da fila:" + reservas.index0f(nome));
    

}
    
    else { 
        reservas.push(nome);
        console.log("Pessoas na fila: " + reservas.length);
        
    }

