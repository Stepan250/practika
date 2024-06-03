document.getElementById('plus').onclick = function() {
    sumNumbers('+')
}

document.getElementById('minus').onclick = function() {
    sumNumbers('-')
}

document.getElementById('multiplication').onclick = function() {
    sumNumbers('*')
}

document.getElementById('division').onclick = function() {
    sumNumbers('/')
}

function sumNumbers(operation) {
    let input1 = document.getElementById('input1').value
    let input2 = document.getElementById('input2').value

    let number1 = parseFloat(input1)
    let number2 = parseFloat(input2)
    let result
    let operator

    if (operation === '+') {
        result = number1 + number2
        operator = '+'
    } else if (operation === '-') {
        result = number1 - number2
        operator = '-'
    } else if (operation === '*') {
        result = number1 * number2
        operator = 'x'
    } else if (operation === '/') {
        result = number1 / number2
        operator = '/'
    }

    document.getElementById('result').textContent = result
    document.getElementById('operator').textContent= operator

}
