var n1 = document.querySelector ('#n1')
var n2 = document.querySelector ('#n2')
var resultado = document.querySelector('span')


function soma (){

    resultado.innerHTML =  parseInt(n1.value) + parseInt(n2.value)
}


function menos (){

    resultado.innerHTML =  parseInt(n1.value) - parseInt(n2.value)
}


function vezes (){

    resultado.innerHTML =  parseInt(n1.value) * parseInt(n2.value)
}

function dividido (){

    resultado.innerHTML =  parseInt(n1.value) / parseInt(n2.value)
}