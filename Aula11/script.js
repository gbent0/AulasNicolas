class Automovel {

    modelo
    marca
    cor
    ano
    motor



    constructor(modelo, marca, cor, ano, motor){
        this.motor = motor
        this.modelo = modelo
        this.cor = cor
        this.ano = ano
        this.marca = marca
    }

    acelerar(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    frear(){
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }

    esterçar(lado){
        return `O veículo ${this.marca} ${this.modelo} está virando para a ${lado}`
    }
}

const veiculo1 = new Automovel('Fiesta', 'Ford', 'Branco', 2015, '1.5L')
console.log(veiculo1.acelerar())

const veiculo2 = new Automovel('Astra', 'Chevrolet', 'Preto Fosco', 1999, '2.0L')
console.log(veiculo2.acelerar())


class Carro extends Automovel {

   abrirPortas(){
    return 'Abrindo as portas!'
   }
}

class Moto extends Automovel {

   grau(){
    return 'Olha o grau!'
   }
}

const carro = new Carro("Kwid", "Renault", "Amarelo", 2018, '1.0L')
const moto = new Moto("S10000RR", "BMW", "Azul", 2025, "1000cc")


console.log(carro.acelerar())
console.log(carro.abrirPortas())
console.log(moto.acelerar())
console.log(moto.grau())











class Pessoa {

    cabeça
    ombro
    joelho
    pe



    constructor(cabeça, ombro, joelho, pe){
        this.cabeça = cabeça
        this.ombro = ombro
        this.joelho = joelho
        this.pe = pe
    }

    correr(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    andar(){
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }
}

class Animal {

    pata
    olhos
    pelagem



    constructor(pata, olhos, pelagem){
        this.pata = pata
        this.olhos = olhos
        this.pelagem = pelagem
    }

    locomoção(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    olhar(){
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }
}

class Produto {

   marca
   embalagem
   preço
   finalidade



    constructor(marca, embalagem, preço, finalidade){
        this.marca = marca
        this.embalagem = embalagem
        this.preço = preço
        this.finalidade = finalidade
    }

    ingerir(){
        return `O veículo ${this.marca} ${this.modelo} está acelerando`
    }

    hidratar(){
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }

    limpar(){
        return `O veículo ${this.marca} ${this.modelo} está freando`
    }
}