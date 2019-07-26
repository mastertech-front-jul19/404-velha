let quadradinhos = document.querySelectorAll(".quadradinho");

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
      console.log(`FIM! O vencedor foi ${vencedor}`);
      for (let cada of quadradinhos) {
        cada.onclick = null;
      }
    }
    else if (deuVelha()) {
      console.log("VELHA");
    }
  }
}
