function somar(){
    let num1 = Number(document.getElementById('n1').value)
    let num2 = Number(document.querySelector('#n2').value)

    let resposta = document.querySelector('#resposta')
    
    // console.log(num1 + num2)
    
    // alert(num1 + num2)
    
    let soma = num1 + num2

    resposta.innerHTML = soma


}

function alterar(){
        let imagem =document.getElementById('imagem')
        imagem.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD5HsZgVHxqClSAmMiecx6TOM1KhabT9BL4w&s")
    }


    let square = document.getElementById('q1')