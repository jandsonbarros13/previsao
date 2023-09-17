const chave = "cebcd482eda57fa9a6714c1c2ba91885"
const apiUnsplash = "https://source.unsplash.com/1600x900/?";
const apiWeather = "https://api.openweathermap.org/data/2.5/weather?q="


function exibirNaTela(dados) {
  const cidade = document.getElementById('cidade')
  const temperatura = document.getElementById('temp')
  const umidade = document.getElementById('umidade')
  const descricao = document.getElementById("descricao")
  const icone = document.getElementById("icone")

  cidade.innerHTML = "Tempo em " + dados.name
  temperatura.innerHTML = parseInt(dados.main.temp) + " °C"
  umidade.innerHTML = " Umidade: " + dados.main.humidity + "%"
  descricao.innerHTML = dados.weather[0].description
  icone.scr = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

  document.body.style.background = `url("${apiUnsplash + dados.name}")`
}


async function buscarCidade(local) {
  let dados = await fetch(apiWeather + local + '&appid=' + chave + "&lang=pt_br" + "&units=metric")

  let resposta = await dados.json()

  exibirNaTela(resposta)


}

function pesquisar() {
  let cidade = document.getElementById('inputCidade').value

  buscarCidade(cidade)
}