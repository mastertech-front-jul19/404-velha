function iguais(indice1, indice2, indice3) {
  if (quadradinhos[indice1].style.backgroundImage === quadradinhos[indice2].style.backgroundImage
    && quadradinhos[indice2].style.backgroundImage === quadradinhos[indice3].style.backgroundImage
    && quadradinhos[indice1].style.backgroundImage !== "") {
    return true;
  }
  return false;
}

function alguemGanhou() {
  if (iguais(0, 1, 2) || iguais(3, 4, 5) || iguais(6, 7, 8)
    || iguais(0, 3, 6) || iguais(1, 4, 7) || iguais(2, 5, 8)
    || iguais(0, 4, 8) || iguais(2, 4, 6)) {
    return true;
  }
  return false;
}

function escolherQuadradinho(quadradinho, imagem) {
  quadradinho.style.backgroundImage = `url("imagens/${imagem}.jpg")`;
};

function deuVelha() {
  for (let quadradinho of quadradinhos) {
    if (quadradinho.style.backgroundImage === "") {
      return false;
    }
  }
  return true;
}

function tratarClique(evento) {
  let simbolo = "O";
  if (controleClique) {
    simbolo = "X";
  }

  escolherQuadradinho(evento.target, simbolo);

  controleClique = !controleClique;

  evento.target.onclick = null;

  if (jogoAcabou()) {
    finalizar();
  }
}

function iniciarTabuleiro() {
  for (let quadradinho of quadradinhos) {
    quadradinho.onclick = tratarClique;
    quadradinho.style.backgroundImage = "";
  }
  novoJogo.style.display = "";
  titulo.innerHTML = "Jogo da Velha!";
}

function jogoAcabou() {
  if (alguemGanhou() || deuVelha()) {
    return true;
  }
  return false;
}

function finalizar() {
  let vencedor = "o jogador X";
  if (controleClique) {
    vencedor = "o jogador O";
  }
  if (deuVelha()) {
    vencedor = "A VELHA";
  }

  titulo.innerHTML = `FIM DE JOGO! O vencedor foi ${vencedor}!`;

  for (let cada of quadradinhos) {
    cada.onclick = null;
  }
  novoJogo.style.display = "inline-block";
}