let quadradinhos = document.querySelectorAll(".quadradinho");
let modal = document.querySelector(".modal");
let vencedorModal = document.querySelector(".modal h2");
let botaoNovoJogo = document.querySelector(".modal button");
let controleClique;

botaoNovoJogo.onclick = iniciarTabuleiro;

iniciarTabuleiro();
