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