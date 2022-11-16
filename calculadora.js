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
        if (y == 0) {
            console.log('impossivel dividir por zero!!');
        }
    
        return x / y
    }
}

const calc = new Matematica()


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

const apagar = document.getElementById('c')


numero1.addEventListener('click', () => {
    visor.value += '1'
})
numero2.addEventListener('click', () => {
    visor.value += '2'
})
numero3.addEventListener('click', () => {
    visor.value += '3'
})
numero4.addEventListener('click', () => {
    visor.value += '4'
})
numero5.addEventListener('click', () => {
    visor.value += '5'
})
numero6.addEventListener('click', () => {
    visor.value += '6'
})
numero7.addEventListener('click', () => {
    visor.value += '7'
})
numero8.addEventListener('click', () => {
    visor.value += '8'
})
numero9.addEventListener('click', () => {
    visor.value += '9'
})
numero0.addEventListener('click', () => {
    visor.value += '0'
})
apagar.addEventListener('click', () => {
    visor.value = ''
})

const mensagen = document.querySelector('p')

var primeiro_valor = {}

const soma = document.getElementById('soma')
const subtracao = document.getElementById('subtracao')
const multiplicacao = document.getElementById('multiplicacao')
const divisao = document.getElementById('divisao')

soma.addEventListener('click', () => {
    if(visor.value == 0){
        mensagen.innerText = 'digite um numero'
    }else{
        mensagen.innerText = ''
        let valor = visor.value
        
        primeiro_valor = {
            valor: valor,
            operacao: '+'
        }
        
        visor.value = ''
        return primeiro_valor
    }
})
subtracao.addEventListener('click', () => {
    if(visor.value == 0){
        mensagen.innerText = 'digite um numero'
    }else{
        mensagen.innerText = ''
        let valor = visor.value
        
        primeiro_valor = {
            valor: valor,
            operacao: '-'
        }
        
        visor.value = ''
        return primeiro_valor
    }
})
multiplicacao.addEventListener('click', () => {
    if(visor.value == 0){
        mensagen.innerText = 'digite um numero'
    }else{
        mensagen.innerText = ''
        let valor = visor.value
        
        primeiro_valor = {
            valor: valor,
            operacao: '*'
        }
        
        visor.value = ''
        return primeiro_valor
    }
})
divisao.addEventListener('click', () => {
    if(visor.value == 0){
        mensagen.innerText = 'digite um numero'
    }else{
        mensagen.innerText = ''
        let valor = visor.value
        
        primeiro_valor = {
            valor: valor,
            operacao: '/'
        }
        
        visor.value = ''
        return primeiro_valor
    }
})

const resultado = document.getElementById('=')

resultado.addEventListener('click', () => {
    if(primeiro_valor.operacao == '+'){
        let valor1 = Number(primeiro_valor.valor)  
        let valor2 = Number(visor.value) 
        visor.value = calc.calc_soma(valor1, valor2);

    }else if(primeiro_valor.operacao == '-'){
        let valor1 = Number(primeiro_valor.valor)  
        let valor2 = Number(visor.value) 
        visor.value = calc.calc_subitracao(valor1, valor2);

    }else if(primeiro_valor.operacao == '*'){
        let valor1 = Number(primeiro_valor.valor)  
        let valor2 = Number(visor.value) 
        visor.value = calc.calc_multiplicacao(valor1, valor2);

    }else if(primeiro_valor.operacao == '/'){
        let valor1 = Number(primeiro_valor.valor)  
        let valor2 = Number(visor.value) 
        visor.value = calc.calc_divisao(valor1, valor2);
    }   
})