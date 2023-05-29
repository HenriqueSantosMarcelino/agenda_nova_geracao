function salvarDados() {
    var radio_btn = document.querySelectorAll('input[type="radio"]:checked');
    radio_btn.checked = false

    radio_btn.forEach(function (radio_btn) {
        var name = radio_btn.getAttribute("name");
        var value = radio_btn.value;
        localStorage.setItem(name, value);
  });
}

function carregarDados() {
    var radio_btn = document.querySelectorAll('input[type="radio"]');

    radio_btn.forEach(function (radio_btn) {
        var name = radio_btn.getAttribute("name");
        var value = localStorage.getItem(name);

    if (value !== null) {
      if (radio_btn.value === value) {
        radio_btn.checked = true;
      }
    }
  });
}

// Event listener para salvar os dados quando o radio button for alterado
var radio_btn = document.querySelectorAll('input[type="radio"]');
radio_btn.forEach(function (radio_btn) {
    radio_btn.addEventListener("change", salvarDados);
});

window.addEventListener("load", carregarDados); // Carregar os dados
