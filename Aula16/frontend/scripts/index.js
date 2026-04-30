const form = document.getElementById("form")
<<<<<<< HEAD
const formatt = document.getElementById("formatt")

form.addEventListener('submit', async (e) => {
=======


form.addEventListener('submit', async(e) => {
>>>>>>> dfc36f79b9e82647517f1cb37557811a02cb97d0
    e.preventDefault()
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const senha = document.getElementById("senha").value
    console.log(nome,email,senha)

    const response = await fetch('http://localhost:8080/registro', {
        method: 'POST',
<<<<<<< HEAD
        headers: {
            'Content-Type': 'application/json'
=======
        headers:{'Content-type': 'application/json'
>>>>>>> dfc36f79b9e82647517f1cb37557811a02cb97d0
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json();
    console.log(data)
    carregarUsuarios();
})

<<<<<<< HEAD
formatt.addEventListener('submit', async (e) => {
    e.preventDefault()
    const id = document.getElementById("idatt").value
    const nome = document.getElementById("nomeatt").value
    const email = document.getElementById("emailatt").value
    const senha = document.getElementById("senhatt").value
    console.log(nome,email,senha)

    const response = await fetch(`http://localhost:8080/atualizar/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })

    const data = await response.json();
    console.log(data)
    carregarUsuarios();
})


async function atualizarUsuario(id, nome, email, senha) {
    const idatt = document.getElementById("idatt")
    const nomeatt = document.getElementById("nomeatt")
    const emailatt = document.getElementById("emailatt")
    const senhatt = document.getElementById("senhatt")

    idatt.value = id
    nomeatt.value = nome
    emailatt.value = email
    senhatt.value = senha
}


async function carregarUsuarios(){
=======
async function carregarUsuarios() {
>>>>>>> dfc36f79b9e82647517f1cb37557811a02cb97d0
    const response = await fetch('http://localhost:8080/usuarios');
    const usuarios = await response.json();

    const tbody = document.getElementById('listaUsuarios');

<<<<<<< HEAD
    tbody.innerHTML = ""

=======
>>>>>>> dfc36f79b9e82647517f1cb37557811a02cb97d0
    usuarios.forEach(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.email}</td>
<<<<<<< HEAD
            <td>
                <button onclick="deletarUsuario(${user.id})">Deletar</button>
                <button onclick="atualizarUsuario('${user.id}', '${user.nome}', '${user.email}', '${user.senha}')">Atualizar</button>
            </td>
        `
=======
        `

>>>>>>> dfc36f79b9e82647517f1cb37557811a02cb97d0
        tbody.appendChild(tr)
    });
}

<<<<<<< HEAD
async function deletarUsuario(id) {
    const response = await fetch(`http://localhost:8080/deletar/${id}`, {
        method: 'DELETE', 
    })
    carregarUsuarios();
}

=======
>>>>>>> dfc36f79b9e82647517f1cb37557811a02cb97d0
window.onload = () => {
    carregarUsuarios();
}