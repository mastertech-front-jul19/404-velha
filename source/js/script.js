let quadradinhos = document.querySelectorAll(".quadradinho");
let titulo = document.querySelector("h1");

let controleClique = true;

for (let quadradinho of quadradinhos) {
  quadradinho.onclick = function () {
    let simbolo;
    if (controleClique) {
      simbolo = "X";
    }
    else {
      simbolo = "O";
    }

    escolherQuadradinho(quadradinho, simbolo);

    controleClique = !controleClique;

    quadradinho.onclick = null;

    if (alguemGanhou()) {
      let vencedor;
      if(controleClique){
        vencedor = "O";
      }
      else{
        vencedor = "X";
      }
      titulo.innerHTML = `FIM DE JOGO! O vencedor foi ${vencedor}`;
      for (let cada of quadradinhos) {
        cada.onclick = null;
      }
    }
    else if (deuVelha()) {
      titulo.innerHTML = "FIM DE JOGO! Deu velha :(";
    }
  }
}
