var semana1CSS = new Date('2023-05-22');
var semana2CSS = new Date('2023-06-05');

function calcularTempoRestante(dataFinal) {
  var agora = new Date().getTime();
  var diferenca = dataFinal - agora;

  var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  return {
    'dias': dias,
    'horas': horas,
  };
}

function exibirTempoRestante(dataFinal, elemento) {
  var timerElemento = document.getElementById(elemento);

  function atualizarTempo() {
    var tempoRestante = calcularTempoRestante(dataFinal);

    timerElemento.innerHTML =
                              '<div class="timer"><div class="timer__titulo">Estou dentro do <br><h3>Cronograma?</h3></div>' 
                             + '<div class="timer__restante"><div class="timer__restante__diashoras">' + tempoRestante.dias + ' </div><div>Dia(s)</div></div> '
                             + ' <div class="timer__restante"><div class=timer__restante__diashoras> ' + tempoRestante.horas + '</div><div>Hora(s)</div></div></div> ';

    // verifica se o tempo já chegou a zero
    if (tempoRestante.dias <= 0 && tempoRestante.horas <= 0) {
      timerElemento.innerHTML = '<div class="timer__finalizado"><div class="timer__titulo__finalizado">Estou dentro do <br><h3>Cronograma?</h3></div>' 
                              + '<div class="timer__restante__finalizado"><div class="timer__restante__diashoras__finalizado"> 0 </div><div>Dia(s)</div></div> '
                              + ' <div class="timer__restante__finalizado"><div class=timer__restante__diashoras__finalizado> 0 </div><div>Hora(s)</div></div></div> '; 
      clearInterval(intervalID);
    }
  }

  atualizarTempo();
  var intervalID = setInterval(atualizarTempo, 1000);
}

exibirTempoRestante(semana1CSS, 'semana1CSS');
exibirTempoRestante(semana2CSS, 'semana2CSS');
