class Teste{
    constructor(valor1, valor2, valor3 = ''){
        this.valor1 = valor1
        this.valor2 = valor2
        this.resultado = this.calcResultado();
    }

    calcResultado(){
        return this.valor1 + this.valor2
    }


}

class Teste2{
    constructor(){
        this.vetor = ['teste']
    }

    // getLastValue(){
    //     return this.vetor[this.vetor.length - 1]
    // }

    addTeste(){
       let valooor = 5
    }

    testandoValor(){
        return addTeste.valor3 = 5;
    }
}

// let testando = new Teste(1,2)
let testando = new Teste2();
testando.testandoValor(new Teste(1,2))

// console.log(JSON.stringify(testando,null,4))
console.log(JSON.stringify(testando, null , 4))

