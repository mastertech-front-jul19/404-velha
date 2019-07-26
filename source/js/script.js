let quadradinhos = document.querySelectorAll(".quadradinho");
let titulo = document.querySelector("h1");
let novoJogo = document.querySelector("button");

let controleClique = true;

novoJogo.onclick = iniciarTabuleiro;

iniciarTabuleiro();
