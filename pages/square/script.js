async function calculate() {
  const base = document.getElementById('triangle_base')
  const heigth = document.getElementById('triangle_height')

  if (parseInt(base.value) === '' || parseInt(heigth.value) === '') {
      alert('Digite todos os valores pedidos!')
  }
  else {
      const area = (base.value * heigth.value)
      alert(`A área desse quadrado é ${area}`)
  }
}