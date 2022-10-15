
function start() {
  var buttonCalculateIMC = document.querySelector('#button-calculate-imc');
  buttonCalculateIMC.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  //inputWeight.addEventListener('input', handleButtonClick);
  //inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateIMC(weight, height) {

  if (weight != null & height != null) {
    return weight / (height * height);
  } else {
    return null;
  }

}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcResultFaixa = document.querySelector('#imc-result-faixa');
  var imcCalculapeso = document.querySelector('#imc-calcula-peso');
  

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateIMC(weight, height);

  var formattedImc = imc.toFixed(2).replace('.', ',');

  //toFixed(2): formata a variável em 2 casas decimais
  //replace('.', ','): troca o ponto por vírgula

  imcResult.textContent = formattedImc;
  calculaFaixa(formattedImc);
  imcResultFaixa.textContent = calculaFaixa(imc);
  imcCalculapeso.textContent = calculaPeso(imc, weight, height);
}

function calculaFaixa(imc) {
  if (imc >= 16.0 && imc <= 16.9) {
    return 'Muito abaixo do peso';
  } else if (imc > 16.9 && imc <= 18.4) {
    return 'Abaixo do peso';
  } else if (imc > 18.4 && imc <= 24.9) {
    return 'Peso normal';
  } else if (imc > 24.9 && imc <= 29.9) {
    return 'Acima do peso';
  } else if (imc > 29.9 && imc <= 34.9) {
    return 'Obesidade grau I';
  } else if (imc > 34.9 && imc <= 40) {
    return 'Obesidade grau II';
  } else if (imc > 40.0) {
    return 'Obesidade grau III';
  } else {
    return null;
  }
}


function calculaPeso(imc, weight, height) {
  
  var pesoMinimo = 18.5 * Math.pow(height, 2);
  var pesoMaximo = 24.9 * Math.pow(height, 2);

  if (imc <= 18.4) {
    var pesoAbaixo = pesoMinimo - weight;
    return ", " + pesoAbaixo.toFixed(2) + " kg abaixo do IMC normal."
  } else if (imc > 24.9) {
    var pesoAcima = weight - pesoMaximo;
    return ", " + pesoAcima.toFixed(2) + " kg acima do IMC normal." 
  } else {
    return null
  }
}

start();

