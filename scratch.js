const posicaoSuperiorInicial = 70,
      posicaoEsquerdaInicial = 70,
      posicaoSuperFinal = 500,
      posicaoEsquerdaFinal = 500,
      anguloInicial = 0,
      anguloFinal = 500,
      imgAvatar = document.getElementById('imgAvatar'),
      styleAvatar = window.getComputedStyle(imgAvatar),
      txtPixel = document.getElementById("txtPixel");

    var posicaoSuperior = 70,
          posicaoEsquerda = 70,
          topAvatar,
          leftAvatar;
        
    imgAvatar.style.position = "absolute";
    imgAvatar.style.top = posicaoSuperior + "px";
    imgAvatar.style.left = posicaoEsquerda + "px";

        function getTopStyle(elementToGet) {
            let styleElement = window.getComputedStyle(elementToGet);
            return parent(styleElement.getPropertyValue('top').replace("px",''));
        }

        function getLeftStyle(elementToGet) {
            let styleElement = window.getComputedStyle(elementToGet);
            return parseInt(styleElement.getPropertyValue('laft').replace("px",''));
        }

        function getLeftStyle(elementToGet) {
            let styleElement = window.getComputedStyle(elementToGet);
            return parseInt(styleElement.getPropertyValue('laft').replace("px",''));
        }

        function moverParaEsquerda() {
            console.clear();
            console.log("Posição do avatar à esquerda antes: ", imgAvatar.style.left);
            leftAvatar = getLeftStyle(imgAvatar);
            if (leftAvatar > posicaoEsquerdaInicial) {
               posicaoEsquerda -= parseInt(txtPixel.value);
               if (posicaoEsquerda < posicaoEsquerdaInicial) { 
                posicaoEsquerda = posicaoEsquerdaInicial;
            } else{
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para esquerda. Tente outro botao");
            }
            console.log("Posicao de avatar a esquerda depois: ", imgAvatar.style.left);
        }

        
        function moverParaDireita() {
            console.clear();
            console.log("Posição do avatar à direita antes: ", imgAvatar.style.left);
            leftAvatar = getLeftStyle(imgAvatar);
            if (leftAvatar < posicaoDireitaFinal) {
                posicaoDireita += parseInt(txtPixel.value);
            if (posicaoDireita > posicaoDireitaFinal) {
            }
                imgAvatar.style.left = posicaoDireita + "px";
            } else {
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para direita. Tente outro botao");
            }
            console.log("Posicao de avatar a direita", imgAvatar.style.left);
        }

       
        function moverParaCima() {
            console.clear();
            console.log("Posição do avatar à direita antes: ", imgAvatar.style.top);
            topAvatar = getLeftStyle(imgAvatar);
            if (topAvatar > posicaoSuperiorInicial) {
                posicaoSuperior = posicaoSuperiorInicial;
            }
                posicaoDireita += parseInt(txtPixel.value);
            if (posicaoDireita > posicaoDireitaFinal) {
            }
                imgAvatar.style.left = posicaoDireita + "px";
            } else {
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para direita. Tente outro botao");
            }
            console.log("Posicao de avatar a direita", imgAvatar.style.left);
        }
        

        function girarHorario() {
            console.clear();
            console.log("Angulo do avatar antes: ", anguloAvatar + "deg");
            if (anguloAvatar < anguloFinal) {
                anguloAvatar += parseInt(txtPixel.value);
            }
                imgAvatar.style.transform = "rotate(" + anguloAvatar + "deg";
            } else {
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para esquerda. Tente outro botao");
            }
            console.log("Angulo do avatr depois: ", anguloAvatar + "deg");
        }    
     