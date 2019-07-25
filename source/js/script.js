let quadradinhos = document.querySelectorAll(".quadradinho");

let controleClique = true;

for(let quadradinho of quadradinhos){
  quadradinho.onclick = function(){
    if(controleClique){
      quadradinho.style.backgroundImage = 'url("imagens/X.jpg")';
    }
    else{
      quadradinho.style.backgroundImage = 'url("imagens/O.jpg")';
    }

    controleClique = !controleClique;
  }
}