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

    quadradinho.onclick = null;

    if((quadradinhos[0].style.backgroundImage === quadradinhos[1].style.backgroundImage 
      && quadradinhos[1].style.backgroundImage === quadradinhos[2].style.backgroundImage 
      && quadradinhos[0].style.backgroundImage !== "")
      || (quadradinhos[3].style.backgroundImage === quadradinhos[4].style.backgroundImage 
        && quadradinhos[4].style.backgroundImage === quadradinhos[5].style.backgroundImage 
        && quadradinhos[3].style.backgroundImage !== "")
        ||(quadradinhos[6].style.backgroundImage === quadradinhos[7].style.backgroundImage 
          && quadradinhos[7].style.backgroundImage === quadradinhos[8].style.backgroundImage 
          && quadradinhos[6].style.backgroundImage !== "")
          || (quadradinhos[0].style.backgroundImage === quadradinhos[3].style.backgroundImage 
            && quadradinhos[3].style.backgroundImage === quadradinhos[6].style.backgroundImage 
            && quadradinhos[0].style.backgroundImage !== "")
            ||(quadradinhos[1].style.backgroundImage === quadradinhos[4].style.backgroundImage 
              && quadradinhos[4].style.backgroundImage === quadradinhos[7].style.backgroundImage 
              && quadradinhos[1].style.backgroundImage !== "")
              ||(quadradinhos[2].style.backgroundImage === quadradinhos[5].style.backgroundImage 
                && quadradinhos[5].style.backgroundImage === quadradinhos[8].style.backgroundImage 
                && quadradinhos[2].style.backgroundImage !== "")
                ||(quadradinhos[0].style.backgroundImage === quadradinhos[4].style.backgroundImage 
                  && quadradinhos[4].style.backgroundImage === quadradinhos[8].style.backgroundImage 
                  && quadradinhos[0].style.backgroundImage !== "")
                  ||(quadradinhos[2].style.backgroundImage === quadradinhos[4].style.backgroundImage 
                    && quadradinhos[4].style.backgroundImage === quadradinhos[6].style.backgroundImage 
                    && quadradinhos[2].style.backgroundImage !== "")){
      for(let cada of quadradinhos){
        console.log("fim de jogo");
        cada.onclick = null;
      }
    }
  }
}