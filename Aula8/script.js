const pessoas = []

const pessoa1 = {
    name: "Erich",
    lastname: "Natal",
    age: 22
}

const pessoa2 = {
    name: "Igor",
    lastname: "Machado",
    age: 20
}

const pessoa3 = {
    name: "Maria",
    lastname: "Clara",
    age: 18
}

const pessoa4 = {
    name: "Leticia",
    lastname: "Costa",
    age: 20
}
const pessoa5 = {
    name: "Raphael",
    lastname: "Ferreira",
    age: 19
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)

const arr = [1,2,3,4,5]

const somAarr = arr.reduce((acc, value) => {
    return acc + value
}, 0)

console.log(somAarr)

const ageAvg = pessoas.reduce((acc, pessoa) => {
    return acc + pessoa.age / pessoas.length
}, 0)

console.log(ageAvg.toFixed(0))

// map: transforma um vetor de acordo com uma condição

const arr2 =[1,2,3,4,5]

const mappedArr = arr2.map((arr) => {
    return arr * 2
})

console.log(mappedArr)

console.log(pessoas)

const mappedPeople = pessoas.map((pessoa) => {
    return { name:pessoa.name, lastname: pessoa.lastname }
})

console.log(mappedPeople)