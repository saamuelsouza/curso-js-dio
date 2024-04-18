/* Faça um programa para calcular o valor de uma viagem. 

Você terá 5 variáveis, sendo elas:
1- Preço do etanol;
1- Preço da gasolina;
3- Tipo de combustível que está no seu carro;
4- Gasto médio de combustível do carro por km;
5- Distância em km da viagem; 

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(valorGasto.fixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(valorGasto.fixed(2));
}
