async function calculate() {
  const base = document.getElementById('rectangle_base')
  const heigth = document.getElementById('rectangle_height')

  if (parseInt(base.value) === '' || parseInt(heigth.value) === '') {
      alert('Digite todos os valores pedidos!')
  }
  else {
      const area = (base.value * heigth.value)
      alert(`A área desse retângulo é ${area}`)
  }
}