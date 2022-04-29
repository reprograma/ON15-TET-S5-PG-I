//1 - Crie uma classe para representar um jogador de futebol, com os atributos nome, posição, data de nascimento, nacionalidade, altura e peso. Crie um método para imprimir todos os dados do jogador, um método para calcular a idade do jogador e outro método para mostrar quanto tempo falta para o jogador se aposentar. Para isso, considere que os jogadores da posição de defesa se aposentam em média aos 40 anos, os jogadores de meio-campo aos 38 e os atacantes aos 35

class Jogador {
  constructor(nome, posicao, nacionalidade, datanasc, altura, peso) {
    this.nome = nome
    this.posicao = posicao
    this.nacionalidade = nacionalidade
    this.datanasc = datanasc
    this.altura = altura
    this.peso = peso
  }

  ImprimisDados() {
    return `Nome: ${this.nome}, Posição: ${this.posicao}, Data de nas: ${this.datanasc}, Altura: ${this.altura}, Peso: ${this.peso} `
  }

  CalcularIdade(ano) {
    let idade = ano - this.datanasc
    return `Idade: ${idade}`
  }

  Aposentadoria(jogador) {
    let idade = jogador - this.datanasc
    if (this.posicao == 'defesa') {
      let defesa = 40 - idade
      return `O jogador se aposentará com 40 anos e faltam ${defesa} anos.`
    } else if (this.posicao == 'meio-campo') {
      let meioCampo = 38 - idade
      return `O jogador se aposentará com 38 anos e faltam ${meioCampo}.`
    } else if (this.posicao == 'atacante') {
      let atacante = 35 - idade
      return `O jogador se aposentará com 35 anos e faltam ${atacante}.`
    }
  }
}

const jogador1 = new Jogador('Roberto', 'defesa', 'Brasil', 1994, '1.80', 70)
console.log(jogador1.ImprimisDados())
console.log(jogador1.CalcularIdade(2022))
console.log(jogador1.Aposentadoria(2022))
