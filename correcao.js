class Operacao {
    static soma(x, y) {
        return x + y
    }

    static subitracao(x, y) {
        return x - y
    }

    static multiplicacao(x, y) {
        return x * y
    }

    static divisao(x, y) {
        if (y != 0) {
            let result = x / y
            return result
        } else {
            return false
        }
    }
}


class Calculadora{

    constructor(){

        this.visor = document.querySelector('input');

        this.numero1 = document.getElementById('1');
        this.numero2 = document.getElementById('2');
        this.numero3 = document.getElementById('3');
        this.numero4 = document.getElementById('4');
        this.numero5 = document.getElementById('5');
        this.numero6 = document.getElementById('6');
        this.numero7 = document.getElementById('7');
        this.numero8 = document.getElementById('8');
        this.numero9 = document.getElementById('9');
        this.numero0 = document.getElementById('0');

        
        this.numero1.addEventListener('click',this.numero1Click);
        this.numero2.addEventListener('click',this.numero2Click);
        this.numero3.addEventListener('click',this.numero3Click);
        this.numero4.addEventListener('click',this.numero4Click);
        this.numero5.addEventListener('click',this.numero5Click);
        this.numero6.addEventListener('click',this.numero6Click);
        this.numero7.addEventListener('click',this.numero7Click);
        this.numero8.addEventListener('click',this.numero8Click);
        this.numero9.addEventListener('click',this.numero9Click);
        this.numero0.addEventListener('click',this.numero0Click); 
        
        
        this.numero1Click.bind(this);
        this.numero2Click.bind(this);
        this.numero3Click.bind(this);
        this.numero4Click.bind(this);
        this.numero5Click.bind(this);
        this.numero6Click.bind(this);
        this.numero7Click.bind(this);
        this.numero8Click.bind(this);
        this.numero9Click.bind(this);
        this.numero0Click.bind(this);
        

        this.ponto = document.getElementById('ponto');
        this.apagar = document.getElementById('c');
        this.trocaSinal = document.getElementById('trocaSinal');
        this.porcentagen = document.getElementById('porcentagen');

        this.ponto.addEventListener('click',this.pontoClick);
        this.apagar.addEventListener('click',this.apagarClick);
        this.trocaSinal.addEventListener('click',this.trocaSinalClick);
        this.porcentagen.addEventListener('click',this.porcentagenClick);


        this.pontoClick.bind(this);
        this.apagarClick.bind(this);
        this.trocaSinalClick.bind(this);
        this.porcentagenClick.bind(this);


        this.soma = document.getElementById('soma');
        this.subtracao = document.getElementById('subtracao');
        this.multiplicacao = document.getElementById('multiplicacao');
        this.divisao = document.getElementById('divisao');

        this.resultado = document.getElementById('=');


        this.soma.addEventListener('click',this.somaClick);
        this.subtracao.addEventListener('click',this.subtracaoClick);
        this.multiplicacao.addEventListener('click',this.multiplicacaoClick);
        this.divisao.addEventListener('click',this.divisaoClick);


        this.somaClick.bind(this);
        this.subtracaoClick.bind(this);
        this.multiplicacaoClick.bind(this);
        this.divisaoClick.bind(this);


        this.resultado.addEventListener('click',this.resultadoClick);

        this.resultadoClick.bind(this);
    }

    numero1Click(){

        this.visor.value += '1'
        this.visor.classList.remove('erro')
    }
    numero2Click(){

        this.visor.value += '2'
        this.visor.classList.remove('erro')
    }
    numero3Click(){
        this.visor.value += '3'
        this.visor.classList.remove('erro')
    }
    numero4Click(){

        this.visor.value += '4'
        this.visor.classList.remove('erro')
    }
    numero5Click(){

        this.visor.value += '5'
        this.visor.classList.remove('erro')
    }
    numero6Click(){

        this.visor.value += '6'
        this.visor.classList.remove('erro')
    }
    numero7Click(){

        this.visor.value += '7'
        this.visor.classList.remove('erro')
    }
    numero8Click(){

        this.visor.value += '8'
        this.visor.classList.remove('erro')
    }
    numero9Click(){

        this.visor.value += '9'
        this.visor.classList.remove('erro')
    }
    numero0Click(){

        this.visor.value += '0'
        this.visor.classList.remove('erro')
    }
    pontoClick(){
        this._fazBusca('.');
    }
    apagarClick(){
        this.visor.classList.remove('erro')
        this.visor.value = ''
        primeiro_valor.valor = 0
    }
    trocaSinalClick(){

        let array = this.visor.value.split('');

        if (this.visor.value == '') {
            this.visor.classList.add('erro')
            this.visor.value += ''
        } else if (array[0] == '-') {
            array[0] = ''
            this.visor.value = array.join('')
        }
        else {
            array.unshift('-')
            this.visor.value = array.join('')
        }
    }
    porcentagenClick(){

        let array = this.visor.value.split('')
        let result = 0
    
        array.forEach((iten) => {
            if (iten == '%') {
                result = true
            }
        })
    
        if (this.visor.value == '') {
            this.visor.classList.add('erro')
            this.visor.value += ''
        } else if (primeiro_valor.status == 'off'){
            this.visor.value = this.visor.value / 100
        }else{
            let calculoPercentual = ((this.visor.value / 100) * primeiro_valor.valor)
            this.visor.value = calculoPercentual
        }
    }

    somaClick(){

        if (this.visor.value == 0) {
            this.visor.classList.add('erro')
        } else {
            let valor = this.visor.value
            primeiro_valor = {
                valor: valor,
                operacao: '+',
                status: 'on'
            }
    
            this.visor.value = ''
            this.soma.classList.add('calculo-selecionado')
            return primeiro_valor
        }
    }

    subtracaoClick(){

        if (this.visor.value == 0) {
            this.visor.classList.add('erro')
        } else {
            let valor = this.visor.value
    
            primeiro_valor = {
                valor: valor,
                operacao: '-',
                status: 'on'
            }
    
            this.visor.value = ''
            this.subtracao.classList.add('calculo-selecionado')
            return primeiro_valor
        }
    }

    multiplicacaoClick(){

        if (this.visor.value == 0) {
            this.visor.classList.add('erro')
        } else {
            let valor = visor.value
    
            primeiro_valor = {
                valor: valor,
                operacao: '*',
                status: 'on'
            }
    
            this.visor.value = ''
            this.multiplicacao.classList.add('calculo-selecionado')
            return primeiro_valor
        }
    }

    divisaoClick(){

        if (this.visor.value == 0) {
            this.visor.classList.add('erro')
        } else {
            let valor = visor.value
    
            primeiro_valor = {
                valor: valor,
                operacao: '/',
                status: 'on'
            }
    
            this.visor.value = ''
            this.divisao.classList.add('calculo-selecionado')
            return primeiro_valor
        }
    }

    resultadoClick(){
        
        if (primeiro_valor.operacao == '+') {
            let valor1 = Number(primeiro_valor.valor)
            let valor2 = Number(this.visor.value)
            this.visor.value = Operacao.soma(valor1, valor2);
    
            this.soma.classList.remove('calculo-selecionado')
            primeiro_valor.status = 'off'
    
        } else if (primeiro_valor.operacao == '-') {
            let valor1 = Number(primeiro_valor.valor)
            let valor2 = Number(this.visor.value)
            this.visor.value = Operacao.subitracao(valor1, valor2);
    
            this.subtracao.classList.remove('calculo-selecionado')
            primeiro_valor.status = 'off'
    
        } else if (primeiro_valor.operacao == '*') {
            let valor1 = Number(primeiro_valor.valor)
            let valor2 = Number(this.visor.value)
            this.visor.value = Operacao.multiplicacao(valor1, valor2);
    
            this.multiplicacao.classList.remove('calculo-selecionado')
            primeiro_valor.status = 'off'
    
        } else if (primeiro_valor.operacao == '/') {
            let valor1 = Number(primeiro_valor.valor)
            let valor2 = Number(this.visor.value)
            let result = Operacao.divisao(valor1, valor2)
    
            if (result == false) {
                this.visor.value = 'impossivel dividir por 0!'
            } else {
                this.visor.value = result
            }
    
            this.divisao.classList.remove('calculo-selecionado')
            primeiro_valor.status = 'off'
        }
    
        primeiro_valor = {
            valor: 0,
            operacao: '',
            status: 'off'
        }
    }

    _fazBusca(busca) {

        let array = this.visor.value.split('')
        let result = 0
    
        array.forEach((iten) => {
            if (iten == busca) {
                result = true
            }
        })
    
        if (this.visor.value == '') {
            this.visor.classList.add('erro')
            this.visor.value += ''
        } else if (result == true) {
            this.visor.classList.add('erro')
            this.visor.value += ''
        } else {
            this.visor.classList.remove('erro')
            this.visor.value += busca
        }
    }
}



var primeiro_valor = {
    valor: visor.value,
    operacao: ''
}


let calculadora = new Calculadora();