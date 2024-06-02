function sumNumbers() {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    let number1 = parseFloat(input1);
    let number2 = parseFloat(input2);

    let sum = number1 + number2;

    document.getElementById('result').textContent = sum;
}
