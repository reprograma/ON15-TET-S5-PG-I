
let genesRNA = []
 class Transcricao {                         
     constructor(RNA) {
         this.RNA = RNA
         
     }
     transcricaoDoDNA(DNA) {
         let genesDNA = DNA.split("") 
         for (let gene of genesDNA) {
             if (gene == "C") {
                 gene = "G"
                 genesRNA.push(gene)
             } else if (gene == "G") {
                gene = "C"
                genesRNA.push(gene)
             } else if (gene == "T") {
                gene = "A"
                genesRNA.push(gene)
             } else if (gene == "A") {
                gene = "U"
                genesRNA.push(gene)
             }
         }
         let transcrevendoPraRNA = genesRNA.join("") 
         console.log(transcrevendoPraRNA)
     }
 }
 const transcricaoFinal = new Transcricao("ATGCCGAAATTTGCG")
transcricaoFinal.transcricaoDoDNA(transcricaoFinal.RNA)
