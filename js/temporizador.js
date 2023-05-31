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
                              '<div class="timer">' +
                                '<div class="timer__titulo">' +
                                  'Estou dentro do <br><h3>Cronograma?</h3>' +
                                '</div>' +

                                '<div class="timer__pai">' +
                                  '<div class="timer__restante">' +
                                    '<div class="timer__restante__variaveis">' +
                                      tempoRestante.dias + 
                                    '</div>' +
                                    '<div class="timer__restante__constantes">' +
                                      'Dia(s)' +
                                    '</div>' +
                                  '</div>' +
                                
                                  '<div class="timer__restante">' +
                                    '<div class=timer__restante__variaveis>' + 
                                      tempoRestante.horas +
                                    '</div>' +
                                    '<div class="timer__restante__constantes">' +
                                      'Hora(s)' +
                                    '</div>' +
                                  '</div>' +
                                '</div>' +
                              
                              '</div>';

    // verifica se o tempo já chegou a zero
    if (tempoRestante.dias <= 0 && tempoRestante.horas <= 0) {
      timerElemento.innerHTML = 
                                '<div class="timer" style="background-color:#ff8b8b;">' +
                                  
                                  '<div class="timer__titulo" style="color:#580000;">' +
                                    'O prazo da SEMANA XX encerrou!' +
                                  '</div>' +
                                  
                                  '<div class="timer__pai">' +
                                    '<div class="timer__restante" style="border: 2px solid rgb(181, 144, 144);">' +
                                      '<div class="timer__restante__variaveis" style="color:#580000;">' +
                                        '0' +
                                      '</div>' +
                                      '<div class="timer__restante__constantes">' +
                                        'Dia(s)' +
                                      '</div>' +
                                    '</div>' +
                                    
                                    '<div class="timer__restante" style="border: 2px solid rgb(181, 144, 144);">' + 
                                      '<div class="timer__restante__variaveis" style="color:#580000;">' + 
                                        '0' +
                                      '</div>' +
                                      '<div class="timer__restante__constantes">' +
                                        'Hora(s)' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                
                                '</div>'; 
      clearInterval(intervalID);
    }
  }

  atualizarTempo();
  var intervalID = setInterval(atualizarTempo, 1000);
}

exibirTempoRestante(semana1CSS, 'semana1CSS');
exibirTempoRestante(semana2CSS, 'semana2CSS');
