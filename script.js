function ConverterFahrenheit() {
var valorCelciusF = (document.getElementById("valor")).value;
var valorCelciuNumerico = parseFloat(valorCelciusF)
var valorEmFahrenheit = (valorCelciuNumerico*1.8)+32
console.log (valorEmFahrenheit);
var elementoValorConvertido = document.getElementById ("valorConvertidoFahrenheit");
var valorConvertido = valorEmFahrenheit + "°F";
elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterKelvin() {
    var valorCelciusF = (document.getElementById("valor")).value;
    var valorCelciuNumerico = parseFloat(valorCelciusF)
    var valorEmKelvin = (valorCelciuNumerico+273)
    console.log (valorEmKelvin);
    var elementoValorConvertido = document.getElementById ("valorConvertidokevin");
    var valorConvertido = valorEmKelvin + "°F";
    elementoValorConvertido.innerHTML = valorConvertido;
    }