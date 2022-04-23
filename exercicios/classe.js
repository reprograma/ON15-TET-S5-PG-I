class Estudante {
    constructor(nome, matricula, endereco, curso) {
        this.nome = nome;// de onde vem o nome??
        this.matricula = matricula;
        this.endereco = endereco;
        this.curso = curso;
    }

    estudarProva(estudo) {
        if(estudo == "S") {
            console.log("Tudo vai dar certo, você irá passar!!");
        } else if(estudo == "N") {
            console.log("Boa sorte então, o bicho vai pegar!!!");
        } else {
            console.log("Você digitou errado!!!")
        }
    }

};

const estudanteRafa = new Estudante("Rafa", 123456, "Algum lugar por ai, 111", "Quimica");
console.log(estudanteRafa);

estudanteRafa.estudarProva("S");
estudanteRafa.estudarProva("N");




class Conta {
    constructor(nomeCliente, cpf, endereco, agencia, conta, telefone) {
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
        this.endereco = endereco;
        this.agencia = agencia;
        this.conta = conta;
        this.telefone = telefone;
        this.saldo = 0;
    }
    
    depositar(valor) {
        return this.saldo += valor
    }

    sacar(valor) {
        if(valor > this.saldo) {
            return "O saldo é insuficiente"
        }
        return this.saldo -= valor
    }

}

let contaAline = new Conta("Aline", "1111111111", "Logo ali", "1010-1", "234567-0", "(11)11111111")
console.log(contaAline)

let contaCarolaine = new Conta("Carolaine", "22222222", "aqui perto", "2323-2", "342543-0", "(22)22222222")
console.log(contaCarolaine)


let depositarSaldo = contaAline.depositar(10000)
console.log(`O novo saldo de ${contaAline.nomeCliente} é: ${depositarSaldo}`)
console.log(contaAline.saldo)
console.log(contaAline.sacar(100))
console.log(contaCarolaine.sacar(10))
