// let square = document.getElementById('q1')
// let input = document.getElementById('cor')

// function alternarCor(){
//     square.style.backgroundColor = "q1"
// }

// square.addEventListener('click', alternarCor)

// function coralternar(){
//     let cor = document.getElementById('cor').value

//     square.style.backgroundColor = cor
// }

// square.addEventListener('click', coralternar)

// function coralternar(e){
//     let cor = e.target.value

//     square.style.backgroundColor = cor
// }

// input.addEventListener('input', coralternar)

let texto = document.getElementById('')
function add(){
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.querySelector('#n2').value)

    let resposta = document.querySelector('#resposta')
    
    // console.log(num1 + num2)
    
    // alert(num1 + num2)
    
    let soma = num1 + num2

    resposta.innerHTML = soma
}