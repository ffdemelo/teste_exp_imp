// main.js
import { somarNumeros } from './funcoes.js';

/* const numero1 = 5;
const numero2 = 10; */
const numero1 = parseFloat(prompt("Digite o primeiro valor, viado!"));
const numero2 = parseFloat(prompt("Agora o segundo, seu tapado!"));
const resultado = somarNumeros(numero1, numero2);

alert(`Toma aí: ${numero1} e ${numero2} é igual a ${resultado}.`);
