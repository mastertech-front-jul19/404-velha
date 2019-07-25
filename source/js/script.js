let quadradinhos = document.querySelectorAll(".quadradinho");

for(let quadradinho of quadradinhos){
  quadradinho.onclick = function(){
    quadradinho.style.backgroundImage = 'url("imagens/X.jpg")';
  }
}