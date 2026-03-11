const users = [
{ id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
{ id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
{ id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
{ id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
{ id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
{ id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
{ id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
{ id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
{ id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
{ id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
{ id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
{ id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
{ id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
{ id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
{ id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

// Map

// Criar um array contendo apenas name e role.
const nameRole = users.map((user) => {
    return { name: user.name, role: user.role }
})

console.log(nameRole)

// Criar um array apenas com os nomes dos usuários.
const namE = users.map((user) => {
    return { name: user.name }
})

console.log(namE)

// Criar um array com os nomes em letras maiúsculas.
const upper = users.map((user) =>{
    return { name: user.name.toUpperCase()}
})

console.log(upper)

// Criar um array adicionando a propriedade salaryAnnual (salário * 12).
const salaryAnnual = users.map((user) => {
    return { name: user.name, salary: user.salary * 12}
})

console.log(salaryAnnual)

// Criar um array apenas com { name, age }.
const nameAge = users.map((user) => {
    return { name: user.name, age: user.age}
})

console.log(nameAge)

// Criar um array apenas com { name, salary } com salário formatado em moeda.
const nameSalary = users.map((user) =>{
    return { name: user.name, salary: `R$${user.salary}` }
})

console.log(nameSalary)

// Criar um array classificando cada usuário como Júnior, Pleno ou Sênior com base na idade.
const roleJPS = users.map((user) =>{
    if(user.salary < 5000 ){
        return { level: "Junior" }
    }
    else if(user.salary >= 5000 && user.salary < 10000){
        return { level: "Pleno" }
    }
    else{
        return { level: "Senior" }
    }
})

console.log(roleJPS)

// Criar um array classificando cada usuário como baixo, médio ou alto com base no salário.
const classification = users.map((user) => {
    if(user.salary < 5000 ){
        return { level: "Baixo" }
    }
    else if(user.salary >= 5000 && user.salary < 10000){
        return { level: "Médio" }
    }
    else{
        return { level: "Alto" }
    }
})

console.log(classification)

// Criar um array contendo apenas { id, name, active }.
const idNameActive = users.map((user) => {
    return { id: user.id, name: user.name, active: user.active }
})

console.log(idNameActive)


// Reduce

// Calcular a soma total dos salários.
const totalSalary = users.reduce((acc, user) => {
    return acc + user.salary
}, 0)

console.log(totalSalary)

// Calcular a média salarial.
const salaryMean = users.reduce((acc, user) => {
    return acc + user.salary / users.length
}, 0)

console.log(salaryMean)

// Calcular a média de idade.


// Contar quantos usuários estão ativos.
const activeUsers = users.reduce((acc, user) => {
    if(user.active == true ){
        return acc + 1
    }
    else{
        return acc
    }
}, 0)

console.log(activeUsers)

// Contar quantos usuários estão inativos.
const nactiveUsers = users.reduce((acc, user) => {
    if(user.active == false){
        return acc + 1
    }
    else{
        return acc
    }
}, 0)

console.log(nactiveUsers)

// Descobrir o maior salário.


