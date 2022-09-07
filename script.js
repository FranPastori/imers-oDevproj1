function ConverterFahrenheit() {
var valorCelcius = (document.getElementById("valor")).value;
var valorCelciuNumerico = parseFloat(valorCelcius)
var valorEmFahrenheit = (valorCelciuNumerico*1.8)+32
console.log (valorEmFahrenheit);
var elementoValorConvertidoF = document.getElementById ("valorConvertidoFahrenheit");
var valorConvertidoF = valorEmFahrenheit + "°F";
elementoValorConvertidoF.innerHTML = valorConvertidoF;
}

function ConverterKelvin() {
    var valorCelcius = (document.getElementById("valor")).value;
    var valorCelciuNumerico = parseFloat(valorCelcius)
    var valorEmKelvin = (valorCelciuNumerico+273)
    console.log (valorEmKelvin);
    var elementoValorConvertidoK = document.getElementById ("valorConvertidokelvin");
    var valorConvertidoK = valorEmKelvin + "k";
    elementoValorConvertidoK.innerHTML = valorConvertidoK;
    }