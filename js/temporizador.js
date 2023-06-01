const semana_2 = { 
  data: new Date('2023-05-29T00:00:00'),
  id: '2'
};

var semana_3 = {
  data: new Date('2023-06-05T00:00:00'),
  id: '3'
};
var semana_4 = {
  data: new Date('2023-06-12T00:00:00'),
  id: '4'
};
var semana_5 = {
  data: new Date('2023-06-19T00:00:00'),
  id: '5'
};
var semana_6 = {
  data: new Date('2023-06-26T00:00:00'),
  id: '6'
};
var semana_7 = {
  data: new Date('2023-07-03T00:00:00'),
  id: '7'
};
var semana_8 = {
  data: new Date('2023-07-10T00:00:00'),
  id: '8'
};
var semana_9 = {
  data: new Date('2023-07-17T00:00:00'),
  id: '9'
};
var semana_10 = {
  data: new Date('2023-07-23T00:00:00'),
  id: '10'
};

function calcularTempoRestante(e) {
  var agora = new Date().getTime();
  var diferenca = e.data - agora;

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
                                    'O prazo da SEMANA ' + dataFinal.id + ' encerrou!' +
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

exibirTempoRestante(semana_2, 'semana_2');
exibirTempoRestante(semana_3, 'semana_3');
exibirTempoRestante(semana_4, 'semana_4');
exibirTempoRestante(semana_5, 'semana_5');
exibirTempoRestante(semana_6, 'semana_6');
exibirTempoRestante(semana_7, 'semana_7');
exibirTempoRestante(semana_8, 'semana_8');
exibirTempoRestante(semana_9, 'semana_9');
exibirTempoRestante(semana_10, 'semana_10');
