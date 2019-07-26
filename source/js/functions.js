function iguais(indice1, indice2, indice3){
  if(quadradinhos[indice1].style.backgroundImage === quadradinhos[indice2].style.backgroundImage
    && quadradinhos[indice2].style.backgroundImage === quadradinhos[indice3].style.backgroundImage
    && quadradinhos[indice1].style.backgroundImage !== ""){
      return true;
    }
  return false;
}

function alguemGanhou() {
  if (iguais(0, 1, 2) || iguais(3, 4, 5) || iguais(6, 7, 8)
    || iguais(0, 3, 6) || iguais(1, 4, 7) || iguais(2, 5, 8)
    || iguais(0, 4, 8)  || iguais(2, 4, 6)) {
    return true;
  }
  return false;
}

function escolherQuadradinho(quadradinho, imagem){
  quadradinho.style.backgroundImage = `url("imagens/${imagem}.jpg")`;
};

function deuVelha(){
  for(let quadradinho of quadradinhos){
    if(quadradinho.style.backgroundImage === ""){
      return false;
    }
  }
  return true;
}
