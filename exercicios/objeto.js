let objeto = {
    chave: "valor"
};



let casa = [
    {
    cor: "Roxa",
    tamanho: "100m2",
    piscina: false
    },
    {
        cor: "Azul",
        tamanho: "90m2",
        piscina: false //Booleano
    }
];

const pessoa = { 
    nome: "Beatriz",
    sobrenome: "Ramerindo",
    rua: "Algum lugar",
    numero: 111,
    telefone: "(11)111111111",
    cpf: "111.111.111-00"
}
const animal = {
    especie: "homem",
    categoria: "homo sapiens",
    altura: "1,70",
    nacionalidade: "europeu"
}



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