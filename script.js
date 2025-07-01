// Define a data final (15 dias a partir de agora)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 15);

function updateCountdown() {
  //Obtenha a data e hora de hoje
  const now = new Date().getTime();

  //Encontre a distância entre agora e a data de contagem
  const distance = endDate.getTime() - now;

  //Cálculos de tempo por dias, horas, minutos e segundos
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000)

// variavel que coleta todos os botões com classe ".tab-btn"
const btn = document.querySelectorAll(".tab-btn")

//adiciona uma função executavel para cada botão
btn.forEach(tab => tab.addEventListener("click", () =>{
    //função que sera executada a cada click nos botões
    tabCliked(tab)
}))


function tabCliked(tab) {
    const contents = document.querySelectorAll(".content")

    contents.forEach(content => content.classList.remove("show"))

    const contentId = tab.getAttribute("content-id")
    const content = document.getElementById(contentId)

    content.classList.add("show")
}