function calculate() {
  const ray = Number(document.getElementById('ray').value)
  const pi = Math.PI

  const area = (Math.pow(ray, 2) * pi).toFixed(2)
  alert(`A área do círculo é igual a ${area}`)
}