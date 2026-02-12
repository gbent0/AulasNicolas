

function adicionar(){
    let texto = document.getElementById('caxa').value
    let listaa = document.getElementById('lista')
    let li = document.createElement('li')

    let botao = document.createElement('button')
    botao.textContent = 'x'

    li.innerHTML = texto
    listaa.appendChild(li)
    li.appendChild(botao)

    botao.addEventListener("click", () => {
        botao.parentElement.remove()
    })
}

