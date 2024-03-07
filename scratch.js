const posicaoSuperiorInicial = 70,
      posicaoEsquerdaInicial = 70,
      posicaoSuperFinal = 500,
      posicaoEsquerdaFinal = 500,
      imgAvatar = document.getElementById('imgAvatar'),
      styleAvatar = window.getComputedStyle(imgAvatar);

      var posicaoSuperior = 50,
          posicaoEsquerda = 50,
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

        function moverParaEsquerda() {
            console.clear();
            leftAvatar = getLeftStyle(imgAvatar);
            if (leftAvatar >= posicaoEsquerdaInicial) {
                posicaoEsquerda -= parseInt(txtPixel.value);
                imgAvatar.style.left = posicaoEsquerda + "px";
            } else{
                console.error("Ops! Chegou ao limite e nao e possivel mais mover para esquerda. Tente outro botao");
            }
            console.log("Posicao de avatar a esquerda", imgAvatar.style.left);
        }