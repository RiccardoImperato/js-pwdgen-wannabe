// JS

'use strict';

const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementColore = document.getElementById('colore');
const elementGenerata = document.getElementById('generata');

const elementNumero = Math.round(Math.random() * 100)

elementNome.innerHTML = prompt('Inserisci il tuo nome')
elementCognome.innerHTML = prompt('Inserisci il tuo cognome')
elementColore.innerHTML = prompt('Inserisci il tuo colore preferito')
elementGenerata.innerHTML = elementNome.innerHTML + elementCognome.innerHTML + elementColore.innerHTML + elementNumero

console.log(elementNome.innerHTML);
console.log(elementCognome.innerHTML);
console.log(elementColore.innerHTML);
console.log(elementGenerata.innerHTML);




