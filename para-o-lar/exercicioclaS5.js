
class dnaTranscriber {
    constructor(dnaString) {
            this.arrDna = dnaString.split("")
            this.arrRna = [] 
    }

    transcribe(){ 

        for(let base of this.arrDna) {
            if(base == "A"){
                this.arrRna.push("U")
            } else if(base == "T") {
                this.arrRna.push("A")
            } else if(base == "C") {
                this.arrRna.push("G")
            } else if(base == "G") {
                this.arrRna.push("C")        
            } else {
                console.log(`A informação que você inseriu não é válida, confira se a sequência DNA está correta.`)
            } 
        }   
        
        let rna = this.arrRna.join("")
        return rna
    }
}

const transcriber1 = new dnaTranscriber("ATGCCGAAATTTGCG")

console.log("Sequência DNA --------------")
console.log(transcriber1.arrDna)
console.log("Transcrição para RNA -------")
console.log(transcriber1.transcribe())