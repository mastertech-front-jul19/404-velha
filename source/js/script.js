let quadradinhos = document.querySelectorAll(".quadradinho");
let titulo = document.querySelector("h1");
let novoJogo = document.querySelector("button");

let controleClique = true;

novoJogo.onclick = function(){
  for (let quadradinho of quadradinhos) {
    quadradinho.onclick = tratarClique;
    quadradinho.style.backgroundImage = "";
  }
  novoJogo.style.display = "";
  titulo.innerHTML = "Jogo da Velha!";
}

for (let quadradinho of quadradinhos) {
  quadradinho.onclick = tratarClique;
}
