//Calculo IMC
const calBtn = document.getElementById("btn-calculo-imc");

function imc() {
  const alt = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resul = document.getElementById("resultado");

  if (alt !== "" && peso !== "") {
    calculo = ((peso / (alt * alt)) * 10000).toFixed(1);
    resul.textContent = calculo;
  } else {
    alert("Campos para calcular IMC não foram preechidos!");
  }
}
calBtn.addEventListener("click", imc);

//Calculo nota Semestral

const calculoSemestral = document.getElementById("btn-calculo-semestral");

function semestral() {
  const n1s = document.getElementById("nota01s").value;
  const n2s = document.getElementById("nota02s").value;
  const resulSemestral = document.getElementById("resultadoSemestral");

  if (n1s !== "" && n2s !== "") {
    calculoSemestralConta = ((2 * n1s + 3 * n2s) / 5).toFixed(0);

    if (calculoSemestralConta <= 59) {
      resulSemestral.className = "form-control alert-danger";
      resulSemestral.textContent =
        "Prova Final! Média: " + calculoSemestralConta;
    } else {
      resulSemestral.className = "form-control alert-success";
      resulSemestral.textContent = "Aprovado! Média: " + calculoSemestralConta;
    }
  } else {
    alert("Campos de calculo de notas faltantes ou com falta de informações.");
  }
}
calculoSemestral.addEventListener("click", semestral);
