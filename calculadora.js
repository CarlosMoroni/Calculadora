class Matematica {
    calc_soma(x, y) {
        return x + y
    }

    calc_subitracao(x, y) {
        return x - y
    }

    calc_multiplicacao(x, y) {
        return x * y
    }

    calc_divisao(x, y) {
        if (y != 0) {
            let result = x / y
            return result
        } else {
            return false
        }
    }
}

function fazBusca(busca) {
    let array = visor.value.split('')
    let result = 0

    array.forEach((iten) => {
        if (iten == busca) {
            result = true
        }
    })

    if (visor.value == '') {
        visor.classList.add('erro')
        visor.value += ''
    } else if (result == true) {
        visor.classList.add('erro')
        visor.value += ''
    } else {
        visor.classList.remove('erro')
        visor.value += busca
    }
}

const calc = new Matematica()


// inserts no visor da calculadora
const visor = document.querySelector('input')

const numero1 = document.getElementById('1')
const numero2 = document.getElementById('2')
const numero3 = document.getElementById('3')
const numero4 = document.getElementById('4')
const numero5 = document.getElementById('5')
const numero6 = document.getElementById('6')
const numero7 = document.getElementById('7')
const numero8 = document.getElementById('8')
const numero9 = document.getElementById('9')
const numero0 = document.getElementById('0')
const ponto = document.getElementById('ponto')

const apagar = document.getElementById('c')
const trocaSinal = document.getElementById('trocaSinal')
const porcentagen = document.getElementById('porcentagen')


numero1.addEventListener('click', () => {
    visor.value += '1'
    visor.classList.remove('erro')
})

numero2.addEventListener('click', () => {
    visor.value += '2'
    visor.classList.remove('erro')
})

numero3.addEventListener('click', () => {
    visor.value += '3'
    visor.classList.remove('erro')
})

numero4.addEventListener('click', () => {
    visor.value += '4'
    visor.classList.remove('erro')
})

numero5.addEventListener('click', () => {
    visor.value += '5'
    visor.classList.remove('erro')
})

numero6.addEventListener('click', () => {
    visor.value += '6'
    visor.classList.remove('erro')
})

numero7.addEventListener('click', () => {
    visor.value += '7'
    visor.classList.remove('erro')
})

numero8.addEventListener('click', () => {
    visor.value += '8'
    visor.classList.remove('erro')
})

numero9.addEventListener('click', () => {
    visor.value += '9'
    visor.classList.remove('erro')
})

numero0.addEventListener('click', () => {
    visor.value += '0'
    visor.classList.remove('erro')
})

ponto.addEventListener('click', () => {
    fazBusca('.')
})

apagar.addEventListener('click', () => {
    visor.classList.remove('erro')
    visor.value = ''
    primeiro_valor.valor = 0
})

trocaSinal.addEventListener('click', () => {
    let array = visor.value.split('');

    if (visor.value == '') {
        visor.classList.add('erro')
        visor.value += ''
    } else if (array[0] == '-') {
        array[0] = ''
        visor.value = array.join('')
    }
    else {
        array.unshift('-')
        visor.value = array.join('')
    }
})

porcentagen.addEventListener('click', () => {
    let array = visor.value.split('')
    let result = 0

    array.forEach((iten) => {
        if (iten == '%') {
            result = true
        }
    })

    if (visor.value == '') {
        visor.classList.add('erro')
        visor.value += ''
    } else if (primeiro_valor.status == 'off'){
        visor.value = visor.value / 100
    }else{
        let calculoPercentual = ((visor.value / 100) * primeiro_valor.valor)
        visor.value = calculoPercentual
    }
})


//  calculos

var primeiro_valor = {
    valor: visor.value,
    operacao: ''
}

const soma = document.getElementById('soma')
const subtracao = document.getElementById('subtracao')
const multiplicacao = document.getElementById('multiplicacao')
const divisao = document.getElementById('divisao')

soma.addEventListener('click', () => {
    if (visor.value == 0) {
        visor.classList.add('erro')
    } else {
        let valor = visor.value
        primeiro_valor = {
            valor: valor,
            operacao: '+',
            status: 'on'
        }

        visor.value = ''
        soma.classList.add('calculo-selecionado')
        return primeiro_valor
    }
})

subtracao.addEventListener('click', () => {
    if (visor.value == 0) {
        visor.classList.add('erro')
    } else {
        let valor = visor.value

        primeiro_valor = {
            valor: valor,
            operacao: '-',
            status: 'on'
        }

        visor.value = ''
        subtracao.classList.add('calculo-selecionado')
        return primeiro_valor
    }
})

multiplicacao.addEventListener('click', () => {
    if (visor.value == 0) {
        visor.classList.add('erro')
    } else {
        let valor = visor.value

        primeiro_valor = {
            valor: valor,
            operacao: '*',
            status: 'on'
        }

        visor.value = ''
        multiplicacao.classList.add('calculo-selecionado')
        return primeiro_valor
    }
})

divisao.addEventListener('click', () => {
    if (visor.value == 0) {
        visor.classList.add('erro')
    } else {
        let valor = visor.value

        primeiro_valor = {
            valor: valor,
            operacao: '/',
            status: 'on'
        }

        visor.value = ''
        divisao.classList.add('calculo-selecionado')
        return primeiro_valor
    }
})


const resultado = document.getElementById('=')

resultado.addEventListener('click', () => {
    if (primeiro_valor.operacao == '+') {
        let valor1 = Number(primeiro_valor.valor)
        let valor2 = Number(visor.value)
        visor.value = calc.calc_soma(valor1, valor2);

        soma.classList.remove('calculo-selecionado')
        primeiro_valor.status = 'off'

    } else if (primeiro_valor.operacao == '-') {
        let valor1 = Number(primeiro_valor.valor)
        let valor2 = Number(visor.value)
        visor.value = calc.calc_subitracao(valor1, valor2);

        subtracao.classList.remove('calculo-selecionado')
        primeiro_valor.status = 'off'

    } else if (primeiro_valor.operacao == '*') {
        let valor1 = Number(primeiro_valor.valor)
        let valor2 = Number(visor.value)
        visor.value = calc.calc_multiplicacao(valor1, valor2);

        multiplicacao.classList.remove('calculo-selecionado')
        primeiro_valor.status = 'off'

    } else if (primeiro_valor.operacao == '/') {
        let valor1 = Number(primeiro_valor.valor)
        let valor2 = Number(visor.value)
        let result = calc.calc_divisao(valor1, valor2)

        if (result == false) {
            visor.value = 'impossivel dividir por 0!'
        } else {
            visor.value = result
        }

        divisao.classList.remove('calculo-selecionado')
        primeiro_valor.status = 'off'
    }

    primeiro_valor = {
        valor: 0,
        operacao: '',
        status: 'off'
    }
})