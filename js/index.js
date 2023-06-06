const btn = document.querySelector('#search');

btn.addEventListener('click', function(){
    buscarDados();
})


async function buscarDados() {
    const city = document.getElementById("city").value;
    const apiKey = "4f6d261fcdda8aacfa59b56d33a9b008";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }
      const dados = await response.json();
      const temp = Math.round(dados.main.temp);
      const desc = dados.weather[0].description;
      const nome = dados.name;
      const pais = dados.sys.country;

      const resultado = document.getElementById("resultado");
      resultado.innerHTML = `<p>Temperatura em ${nome}, ${pais}: ${temp}°C. ${desc}</p>`;
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  }