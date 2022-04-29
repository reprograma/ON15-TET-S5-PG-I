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
        return (`Nome: ${this.nome}, Posição: ${this.posicao}, Data de Nascimento: ${this.datanasc}, Altura: ${this.altura}, Peso: ${this.peso}`)


    }
    calcularIdade(ano){
        let idade = ano - this.datanasc;
        return (`Idade: ${idade}`)

    }
    aposentadoria(jogador){
        let idade = jogador - this.datanasc
        if (this.posicao == "defesa") {
            return (`O jogador se aposentará com 40 ano, falta ${(40 - idade)}`)
            
        }else if(this.posicao == "meio-campo"){
            return (`O jogador se aposentará com 38 anos, falta ${(38 - idade)}`)
        }else{
            return (`O jogador se aposentará com 35 anos, falta ${(35- idade)}`)
        }

    }

    
}
const jogadorPaola = new Jogador("Paola", "defesa", 2000,  "braileira", 1.70, 65);
console.log(jogadorPaola.imprimirDados(), jogadorPaola.calcularIdade(2022), jogadorPaola.aposentadoria(2022));
// console.log(jodaddoraPaola.imprimirDados());
// console.log(jodaddoraPaola.imprimirDados());
