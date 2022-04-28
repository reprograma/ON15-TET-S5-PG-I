// 1 - Crie uma classe para representar um jogador de futebol, com os atributos nome, posição, data de nascimento, nacionalidade, altura e peso. Crie um método para imprimir todos os dados do jogador, um método para calcular a idade do jogador e outro método para mostrar quanto tempo falta para o jogador se aposentar. Para isso, considere que os jogadores da posição de defesa se aposentam em média aos 40 anos, os jogadores de meio-campo aos 38 e os atacantes aos 35.


class Jogador{
    constructor(nome, posicao, datanasc, nacionalidade, altura, peso){
        this.nome = nome;
        this.posicao = posicao;
        this.datanasc = datanasc;
        this.nacionalidade = nacionalidade;
        this.altura = altura;
        this.peso = peso;
    }

    imprimirDados(){
        return(`Nome: ${this.nome}, Posição: ${this.posicao}, Data de Nascimento: ${this.datanasc}, Altura: ${this.altura}, Peso:${this.peso}`)
    }
    calcularIdade(ano){
        let idade = ano - this.datanasc
        return (`Idade: ${idade}`);
    }
    aposentadoria(jogador){
       let idade = jogador - this.datanasc
       if (this.posicao == "defesa") {
            let defesa = 40 - idade
        return (`O jogador se aposentará com 40 anos e faltam ${defesa} anos.`)
        } else if (this.posicao == "meio-campo"){
            let meioCampo = 38 - idade
            return (`O jogador se aposentará com 38 anos e faltam ${meioCampo} anos.`)
        } else {
            let atacante = 35 - idade
return (`O jogador se aposentará com 35 anos e faltam ${atacante} anos.`)
        }
     
    }

}

const jogador1 = new Jogador ("Roberto", "defesa", "1994", "Nova Lima", "1.80", "70 kg");
console.log(jogador1.imprimirDados())
console.log(jogador1.calcularIdade(2022))
console.log(jogador1.aposentadoria(2022))
