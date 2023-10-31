// JS

'use strict';

const elementNome = document.getElementById('nome');
const elementCognome = document.getElementById('cognome');
const elementPassword = document.getElementById('password');
const elementColore = document.getElementById('colore');
const elementGenerata = document.getElementById('generata');

console.log(elementNome);
console.log(elementCognome);
console.log(elementPassword);
console.log(elementColore);

elementGenerata.innerHTML = 'Nuova password: '

elementNome.innerHTML = prompt('Inserisci il tuo nome')
elementCognome.innerHTML = prompt('Inserisci il tuo cognome')
elementPassword.innerHTML = prompt('Inserisci La tua password')
elementColore.innerHTML = prompt('Inserisci il tuo colore preferito')
elementGenerata.innerHTML += elementNome.innerHTML + elementCognome.innerHTML + elementColore.innerHTML + (21)






