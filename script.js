var palavra = sortear_palavra();
var tentativa = 0;

function criar_botao_reset(){

  var reset_button = document.createElement('button');
  reset_button.type = 'button';
  reset_button.innerHTML = 'Tentar Novamente'
  reset_button.className = 'reset_button'
  var substituir = document.getElementById('campo_de_resposta');
  substituir.style.cssText = 'flex-direction: column;'
  substituir.appendChild(reset_button);

  reset_button.onclick = function(){
    console.log('reset')
    window.location.reload();
  }

}

function fim_do_jogo(resposta, sub) {
  var titulo = document.getElementById('titulo_tabela');
  var delet = document.getElementById('campo_de_resposta');
  if (resposta == palavra) {
    titulo.innerHTML = 'RESPOSTA CORRETA'
    delet.innerHTML = ''
    criar_botao_reset();
  }

  if (sub == 30 && resposta != palavra) {
    sub = 100;
  }

  if (sub == 100) {
    titulo.innerHTML = `FIM DE JOGO`
    delet.innerHTML = `A resposta correta era ${palavra}`
    criar_botao_reset();
  }
}

function verificar_tentativa(tent) {
  var aux = 0;
  switch (tent) {
    case 1:
      aux = 0;
      break;

    case 2:
      aux = 6;
      break;

    case 3:
      aux = 12;
      break;

    case 4:
      aux = 18;
      break;

    case 5:
      aux = 24;
      break;

    case 6:
      aux = 30;
      break;

    default:
      aux = 100;
      break;
  }

  return aux;

}

function verificar_letra_na_palavra(resp) {

  for (var k = 0; k < palavra.length; k++) {
    if (resp == palavra.charAt(k)) {
      return true;
    }
  }
}

function validar_resposta() {

  tentativa++;
  var letra_coluna = verificar_tentativa(tentativa);

  var aux = document.getElementById('resposta');
  var resposta = aux.value;

  resposta = resposta.toLowerCase();
  
  fim_do_jogo(resposta, letra_coluna);

  for (var i = 0; i < palavra.length; i++) {

    var substituir = document.getElementsByClassName("letras")[i + letra_coluna];

    if (resposta.charAt(i) == palavra.charAt(i)) {
      substituir.innerHTML = resposta.charAt(i).toUpperCase();
      substituir.style.cssText = 'background-color: #44803F;'
    }

    else if (verificar_letra_na_palavra(resposta.charAt(i)) == true) {
      substituir.innerHTML = resposta.charAt(i).toUpperCase();
      substituir.style.cssText = 'background-color: #FFEC5C;'
    }

    else {
      substituir.innerHTML = resposta.charAt(i).toUpperCase();
      substituir.style.cssText = 'background-color: #FF5A33;'
    }

  }
}

function sortear_palavra() {
  var numero = Math.floor(Math.random() * 38);
  const lista_de_palavras = [ "cavalo","gaveta", "banana", "batata", "cabelo", "trator", "medico", "doutor", "portal", "luneta", "fibula", "jantar", "maleta", "cornea", "girafa", "camelo", "aranha", "castor", "roedor", "centro", "esfera", "angulo", "farofa", "feijao", "pastel", "ambito", "treino", "sapien", "humano", "mulher", "garoto", "rinite", "queijo", "salame", "ampere", "eletron", "palito", "meiose","osmose"];
  
  return lista_de_palavras[numero];
}
