/* Faça um programa para calcular o valor de uma viagem. 

Você terá 3 variáveis, sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por km;
3- Distância em km da viagem; 

*/
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorlitros;
const valorGasto = litrosConsumidos * precoCombustivel; 
console.log(valorGasto.toFixed(2));