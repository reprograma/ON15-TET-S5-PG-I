/*
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são.


Classe é um conjunto de características e comportamentos que definem o conjunto de objetos pertencentes à essa classe.


 function Pessoa (nome) {
     this.nome = nome ;
  }
  var pessoa1 =  new Pessoa ('Joana');
  console.log (pessoa1.nome); // 'Joana'

  Isso funcionou bem, até ser necessário que outras classes herdem propriedades e metódos de outra classe.

  class Pessoa{
  constructor(nome){
    this.nome = nome;
  }
}
const pessoa1 = new Pessoa('Joana')
console.log(pessoa1.nome) //'Joana'
*/

class Conta {
    constructor(nomeCliente, cpf, enderenco, agencia, Conta) {
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
        this.enderenco = enderenco;
        this.agencia = agencia;
        this.Conta = Conta;
        this.saldo = 0;
    }

    depositar(valor) {
        return this.saldo += valor
    }

    sacar(valor) {
        if(this.saldo < valor) {
            return console.log("Saldo insuficiente")
        }
        return this.saldo -= valor
    }

};



let ContaAline = new Conta('Aline', '123.456.789-10', 'Rua da paz', '1234', '12345', '1000');
console.log(ContaAline);

let ContaCarol = new Conta('Carol', '123.456.789-10', 'Rua da paz', '1234', '12345', '5000');
console.log(ContaCarol);

let depositarSaldo = ContaAline.depositar(1000);

let sacarSaldo = ContaAline.sacar(500);

console.log(ContaCarol);
console.log(`Seu Saldo atualo é ${depositarSaldo}`);
console.log(`Seu Saldo atualo é ${sacarSaldo}`);







