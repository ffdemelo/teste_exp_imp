// main.js
import { somarNumeros } from './funcoes.js';

/* const numero1 = 5;
const numero2 = 10; */
const numero1 = parseFloat(prompt("Digite o primeiro valor!"));
const numero2 = parseFloat(prompt("Agora o segundo, por favorzinho!"));
const resultado = somarNumeros(numero1, numero2);

alert(`TO resultado que não pode está muito preciso: ${numero1} e ${numero2} é igual a ${resultado}.`);
