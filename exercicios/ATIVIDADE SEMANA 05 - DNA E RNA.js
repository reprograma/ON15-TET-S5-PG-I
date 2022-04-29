

/*Oi, prof! Tudo bem? Esse código fiz junto com as meninas em um grupo de estudo, minha contribuição foi no split e join. 
 Eu estava muito insegura e me sentindo incapaz, mas após essa reunião percebi que a lógica se constrói em grupo.   */

 let RNA = []
 class Conversao {                          ///aqui fizemos a classe e eu a chamei de conversão 
     constructor(filamentoRNA) {
         this.filamentoRNA = filamentoRNA
     }
 
     conversao(DNA) {
         let acidoNucleico = DNA.split("")  ///usei split para separar as letras, transformar numa 'array'
 
         for (let letra of acidoNucleico) {
             if (letra == "C") {
                 letra = "G"
                 RNA.push(letra)
 
             } else if (letra == "G") {
                 letra = "C"
                 RNA.push(letra)
 
             } else if (letra == "T") {
                 letra = "A"
                 RNA.push(letra)
 
             } else if (letra == "A") {
                 letra = "U"
                 RNA.push(letra)
             }
 
         }
 
         let convertendoParaRNA = RNA.join("") /// usei o join para junta-las no console
         console.log(convertendoParaRNA)
     }
 
 }
 
 const resultadoFinal = new Conversao("ATGCCGAAATTTGCG")
resultadoFinal.conversao(resultadoFinal.filamentoRNA)
 