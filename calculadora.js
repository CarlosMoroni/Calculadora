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

function insertVisor(numero, valor){
    numero.addEventListener('click', () => {
        visor.value += valor
        visor.classList.remove('erro')
    })
}

function selecionaCalculo(sinal, calculo){
    if (visor.value == 0) {
        visor.classList.add('erro')
    } else {
        primeiro_valor = {
            valor: visor.value,
            operacao: sinal,
            status: true
        }

        visor.value = ''
        calculo.classList.add('calculo-selecionado')
        return primeiro_valor
    }
}

const calc = new Matematica()


// pegando valores do html
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

// inserindo valores no visor da calculadora
insertVisor(numero1, '1')
insertVisor(numero2, '2')
insertVisor(numero3, '3')
insertVisor(numero4, '4')
insertVisor(numero5, '5')
insertVisor(numero6, '6')
insertVisor(numero7, '7')
insertVisor(numero8, '8')
insertVisor(numero9, '9')
insertVisor(numero0, '0')

ponto.addEventListener('click', () => {
    fazBusca('.')
})

// topo da calculadora
apagar.addEventListener('click', () => {
    visor.classList.remove('erro')
    visor.value = ''
})

trocaSinal.addEventListener('click', () => {
    let arrayVisor = visor.value.split('');

    if (visor.value == '') {
        visor.classList.add('erro')
    } else if (arrayVisor[0] == '-') {
        arrayVisor[0] = ''
        visor.value = arrayVisor.join('')
    }
    else {
        arrayVisor.unshift('-')
        visor.value = arrayVisor.join('')
    }
})

porcentagen.addEventListener('click', () => {
    let array = visor.value.split('')
    let porcento = 100

    if (visor.value == '') {
        visor.classList.add('erro')
    } else if (primeiro_valor.status == false){
        visor.value = visor.value / porcento
    }else{
        let calculoPercentual = ((visor.value / porcento) * primeiro_valor.valor)
        visor.value = calculoPercentual
    }
})


//  calculos
var primeiro_valor = {
    valor: 0,
    operacao: '',
    status: false
}

const soma = document.getElementById('soma')
const subtracao = document.getElementById('subtracao')
const multiplicacao = document.getElementById('multiplicacao')
const divisao = document.getElementById('divisao')


soma.addEventListener('click', () => {
    selecionaCalculo('+', soma)
})

subtracao.addEventListener('click', () => {
    selecionaCalculo('-', subtracao)
})

multiplicacao.addEventListener('click', () => {
    selecionaCalculo('*', multiplicacao)
})

divisao.addEventListener('click', () => {
    selecionaCalculo('/', divisao)
})

// resultado!
const resultado = document.getElementById('=')

resultado.addEventListener('click', () => {
    if (primeiro_valor.operacao == '+') {
        let valor1 = Number(primeiro_valor.valor)
        let valor2 = Number(visor.value)
        visor.value = calc.calc_soma(valor1, valor2);

        soma.classList.remove('calculo-selecionado')
        primeiro_valor.status = false

    } else if (primeiro_valor.operacao == '-') {
        let valor1 = Number(primeiro_valor.valor)
        let valor2 = Number(visor.value)
        visor.value = calc.calc_subitracao(valor1, valor2);

        subtracao.classList.remove('calculo-selecionado')
        primeiro_valor.status = false

    } else if (primeiro_valor.operacao == '*') {
        let valor1 = Number(primeiro_valor.valor)
        let valor2 = Number(visor.value)
        visor.value = calc.calc_multiplicacao(valor1, valor2);

        multiplicacao.classList.remove('calculo-selecionado')
        primeiro_valor.status = false

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
        primeiro_valor.status = false
    }else {
        visor.classList.add('erro')
    }

    primeiro_valor = {
        valor: 0,
        operacao: '',
        status: false
    }
})