function alterarStatus(id){
 let gameClicado = document.getElementById(`game-${id}`);
 let imagem = gameClicado.querySelector('.dashboard__item__img'); //nessa classe é possível perceber se o jogo está alugado ou não.
 let botao = gameClicado.querySelector('.dashboard__item__button');

 if (imagem.classList.contains('dashboard__item__img--rented')){  //verificar se dentro da lista de classes existe uma específica.
            imagem.classList.remove('dashboard__item__img--rented'); //tira a opacidade da imagem
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
 } else {
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
    botao.classList.add('dashboard__item__button--return');
 
 }

}
