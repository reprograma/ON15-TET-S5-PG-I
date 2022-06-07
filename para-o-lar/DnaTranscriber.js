class DnaTranscriber{  
 constructor(dna) {
    this.dna = dna;
    this.rna = []
 }
 transcreveRna () {

   let transcriberDna = this.dna.split ("")
    for (let letra of transcriberDna) {
       if (letra == "C") {
          letra = "G"
          this.rna.push(letra)

       } else if (letra == "A"){
          letra = "U"
          this.rna.push(letra)
       } else if (letra == "G"){
         letra = "C"
         this.rna.push(letra)
      } else if (letra == "T"){
         letra = "A"
         this.rna.push(letra)
      }
      }
      this.rna = this.rna.join ("")
   }
}

   
const dnaTranscriber = new DnaTranscriber("ATGCCGAAATTTGCG")
console.log (dnaTranscriber)
dnaTranscriber.transcreveRna ()
console.log (dnaTranscriber)