// Defina as datas de conclusão das tarefas
var tarefa1Data = new Date('2023-06-01');
var tarefa2Data = new Date('2023-06-15');

// Função para calcular o tempo restante
function calcularTempoRestante(dataFinal) {
  var agora = new Date().getTime();
  var diferenca = dataFinal - agora;

  var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  return {
    'dias': dias,
    'horas': horas,
    'minutos': minutos,
    'segundos': segundos
  };
}

// Função para exibir o tempo restante
function exibirTempoRestante(dataFinal, elemento) {
  var timerElemento = document.getElementById(elemento);

  function atualizarTempo() {
    var tempoRestante = calcularTempoRestante(dataFinal);

    timerElemento.innerHTML = 'Tempo restante: ' + tempoRestante.dias + ' dias, ' +
                              tempoRestante.horas + ' horas, ' +
                              tempoRestante.minutos + ' minutos, ' +
                              tempoRestante.segundos + ' segundos';

    // Verifica se o tempo já chegou a zero
    if (tempoRestante.dias <= 0 && tempoRestante.horas <= 0 && tempoRestante.minutos <= 0 && tempoRestante.segundos <= 0) {
      timerElemento.innerHTML = 'Tarefa concluída!';
      clearInterval(intervalID);
    }
  }

  // Atualiza o tempo inicialmente e, em seguida, a cada segundo
  atualizarTempo();
  var intervalID = setInterval(atualizarTempo, 1000);
}

// Chama a função para exibir o tempo restante para cada tarefa
exibirTempoRestante(tarefa1Data, 'timer');
exibirTempoRestante(tarefa2Data, 'timer');
