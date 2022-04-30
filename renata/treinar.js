// # Treinando os conhecimentos

// 1 - Crie uma classe para representar um jogador de futebol, com os atributos nome, posição, data de nascimento, nacionalidade, altura e peso. Crie um método para imprimir todos os dados do jogador, um método para calcular a idade do jogador e outro método para mostrar quanto tempo falta para o jogador se aposentar. Para isso, considere que os jogadores da posição de defesa se aposentam em média aos 40 anos, os jogadores de meio-campo aos 38 e os atacantes aos 35.

        class Jogador {
            constructor(nome, posicao, anonasc, altura, peso){
                this.nome = nome;
                this.posicao = posicao;
                this.anonasc = anonasc;
                this.altura = altura;
                this.peso = peso;
            }
        
            imprimirDados(){
                
                return (`Nome: ${this.nome}, Posição: ${this.posicao}, Data de Nascimento: ${this.anonasc}, Altura: ${this.altura}, Peso: ${this.peso}`)
        
            }
        
            calcularIdade(ano){ 
                let idade = (ano - this.anonasc);
                return (`A idade do jogador é: ${idade}`);
        
            }
        
            aposentadoria(jogador){    
                let idade = jogador - this.anonasc;
                if(this.posicao == "defesa"){
                    let defesa = 40 - idade;
                    return(`O jogador ${this.nome} se aposentará com 40 anos e faltam ${defesa} anos`);
                } else if(this.posicao == "meio-campo"){
                    let meioCampo = 38 - idade;
                    return(`O jogador ${this.nome} se aposentará com 38 anos e faltam ${meioCampo} anos`);
                }else if(this.posicao == "atacante"){
                    let atacante = 35 - idade;
                    return(`O jogador ${this.nome} se aposentará com 35 anos e faltam ${atacante} anos`);
                }else{
                    return(`Coloque uma posição válida`);
                }
            }
        }
        
    


const jogador1 = new Jogador("Renata", "defesa", "2000", "Brasileira", "1,60", "60");
console.log(jogador1.imprimirDados());
console.log(jogador1.calcularIdade(2020));
console.log(jogador1.aposentadoria(2020));