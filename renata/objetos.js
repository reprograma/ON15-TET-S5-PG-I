/*Objetos são coleção de dados, que sao decrarados por meio chaves e valores. Objetos são usados para abstrair o mundo real, como por exemplo, um cartão, um gatinho, uma aluna, etc.
Posso ter várias propriedades dentro de um objeto, como por exemplo, nome, idade, altura, peso, etc.

Atributos - são variáves( ou seja, dentro do objeto a variável se torna um atributo) que um objeto possui.

Métodos - são as funções ( ou seja, dentro do objeto a função se torna um método) que um objeto possui. O método sempre vai executar uma ação, como se fosse um verbo na lingua portuguesa.
*/

let casa = [
    {
        cor: "preto",
        tamanho : "100m²",
        piscina : false,
    },
    {
        cor : "branco",
        tamanho: "200m²",
        piscina: false
    }
];


// exemplo 1 - mais simples
const pessoa = { 
    nome: "Beatriz",
    sobrenome: "Ramerindo",
    endereco: "Algum lugar, 111",
    telefone: "11 1111-1111",
    cpf: "111.111.111-11",
    falarNome(){ 
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} ${this.endereco} ${this.cpf}`)
    }
} 
pessoa.falarNome()

// exempo 2 - mais próximo do que seria na vida real
const Cartao = {
    numero: "1234-4567-8910-0000",
    bandeira: "Visa",
    vencimento: "12/20",
    cvv: "123",
    titular: "Beatriz Ramerindo",
    pagarDebito(){ 
        console.log(`Pagando com o cartão ${this.numero}, na funcao debito`)
    },
    pagarCredito() { 
        console.log(`Pagando com o cartão ${this.numero}, na funcao credito`)
    },
    getDados() {
        return {
            numero: this.numero,
            bandeira: this.bandeira,
            vencimento: this.vencimento,
            cvv: this.cvv,
            titular: this.titular
        }
    }
}
