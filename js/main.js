function convertirCelsius(){
 var elemento = document.getElementById("f");
  document.getElementById("result").innerHTML = (elemento.value*(9/5)-32).toFixed(2);
};
function convertirFahrenheit(){
 var elemento = document.getElementById("c");
  document.getElementById("result").innerHTML = (elemento.value-32*(5/9)).toFixed(2);
}
