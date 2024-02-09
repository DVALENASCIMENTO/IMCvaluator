const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

const calcIMC = () => {

  if (altura.value !== '' && peso.value !== '') {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classification = ''
    let pesoIdeal = 0

    if (altura.value !== '') {
        const alturaMetros = altura.value
        const alturaCentimetros = alturaMetros * 100
        pesoIdeal = alturaCentimetros - 100 - ((alturaCentimetros - 150) / 4)
    }

    if (imc < 18.5) {
      classification = 'Abaixo do peso'
      const kgGanhar = pesoIdeal - peso.value
      resultado.innerHTML = `IMC: ${imc} (${classification}). Ganhe ${kgGanhar.toFixed(2)} kg para atingir o peso ideal.`
    } else if (imc < 25) {
      classification = 'Peso normal'
      resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else if (imc < 30) {
      classification = 'Acima do peso'
      const kgPerder = peso.value - pesoIdeal
      resultado.innerHTML = `IMC: ${imc} (${classification}). Perca ${kgPerder.toFixed(2)} kg para atingir o peso ideal.`
    } else if (imc < 35) {
      classification = 'Obesidade Grau I'
      const kgPerder = peso.value - pesoIdeal
      resultado.innerHTML = `IMC: ${imc} (${classification}). Perca ${kgPerder.toFixed(2)} kg para atingir o peso ideal.`
    } else if (imc < 41) {
      classification = 'Obesidade Grau II'
      const kgPerder = peso.value - pesoIdeal
      resultado.innerHTML = `IMC: ${imc} (${classification}). Perca ${kgPerder.toFixed(2)} kg para atingir o peso ideal.`
    } else {
      classification = 'Obesidade Grau III'
      const kgPerder = peso.value - pesoIdeal
      resultado.innerHTML = `IMC: ${imc} (${classification}). Perca ${kgPerder.toFixed(2)} kg para atingir o peso ideal.`
    }
    
  } else {
    resultado.innerHTML = 'Preencha os campos'
  }
}
