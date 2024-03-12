const input = document.getElementById('numberdisplay')
const addButton = document.getElementById('button1')
const minusButton = document.getElementById('(button2')
const restartButton =  document.getElementById('button3')

addButton.addEventListener('click', count)
let number = 0
function count(){
    number = number + 1
    input.innerHTML = number
}

button2.addEventListener('click', minus)

function minus(){
    number = number -1
    input.innerHTML = number
}
restartButton.addEventListener('click', restart)
function restart(){
    number = 0
    input.innerHTML = number
}




//restartButton.addEventListener('click', restart)
//function restart(){
    //number = number - number
    //input.innerHTML = number
//}