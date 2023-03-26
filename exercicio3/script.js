//Crie a const para a frase aqui
// # Exercício 3

// A partir da frase a seguir, faça o que se pede.

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const fraseSegunda = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'.replaceAll("verde"," rosa").replaceAll("azul", "laranja");

// c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

console.log(fraseSegunda.includes("verde"));
console.log(fraseSegunda.includes("laranja"));

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

const frase3 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: '
const frase4 = '"BOAS VINDAS, mas não deixe o gato sair"';

const fraseCompleta = frase3 + frase4.toUpperCase();

console.log(fraseCompleta);