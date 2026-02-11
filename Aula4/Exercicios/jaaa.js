let square = document.getElementById('q1')
let input = document.getElementById('cor')

// function alternarCor(){
//     square.style.backgroundColor = "q1"
// }

// square.addEventListener('click', alternarCor)

// function coralternar(){
//     let cor = document.getElementById('cor').value

//     square.style.backgroundColor = cor
// }

// square.addEventListener('click', coralternar)

function coralternar(e){
    let cor = e.target.value

    square.style.backgroundColor = cor
}

input.addEventListener('input', coralternar)