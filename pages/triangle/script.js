async function calculate() {
    const base = document.getElementById('triangle_base')
    const heigth = document.getElementById('triangle_height')

    console.log(base.value);
    console.log(heigth.value);

    if (parseInt(base.value) === '' || parseInt(heigth.value) === '') {
        alert('Digite todos os valores pedidos!')
    }
    else {
        const area = (base.value * heigth.value) / 2
        alert(`A área desse triângulo é ${area}`)
    }
}