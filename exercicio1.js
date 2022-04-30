//const constrDna = ["ATGCCGAAATTTGCG"]
//const letras = constrDna.indexOf("ATGCCGAAATTTGCG")
//if (letras !== 1){
    //constrDna[letras] = "UACGGCUUUAAACGC"
//}
//console.log(`O segmento do RNA é ${constrDna}`)


// Prof Hanna veja se dessa forma esta mais correto?

class constrDna {
    construtor(rna){
    this.rna = rna
    }
}
const dna = ["ATGCCGAAATTTGCG"]
const letras = dna.indexOf("ATGCCGAAATTTGCG")
if (letras !== 1){
    dna[letras] = "UACGGCUUUAAACGC"
}
console.log(`O segmento do RNA é ${dna}`)

