const form = document.getElementById("form")

form.addEventListener('submit', async() => {
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value

    const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })

    })

    const data = await response.json();
    console.log(data)


})