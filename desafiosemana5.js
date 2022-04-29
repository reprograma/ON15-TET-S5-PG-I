// class DNA {
// constructor("ATGCCGAAATTTGCG") {
// this.A = A;
// this.T = T;
// this.G = G;
// this.C = C;
// this.C = C;
// this.G = G;
// this.G = G;
// this.A = A;
// this.A = A;
// this.A = A;
// this.T = T;
// this.T = T;
// this.T = T;
// this.G = G;
// this.C = C;
// this.G = G;

// }

// RNA
// class RNA{
//     constructor("UACGGCUUUAAACGC"){
//         this.G = G;
//         this.C = C;
//         this.U = U;
//         this.A = A;
//     }
// }  
// console.table(R (NA,DNA)

// DNA - ATGCCGAAATTTGCG


// ```
// RNA - UACGGCUUUAAACGC
// ```

// | DNA | RNA |
// | --- | --- |
// | G   | C   |
// | C   | G   |
// | T   | A   |
// | A   | U   |


const RNA = []
class Convertor{ 
    constructor(segmento){
        this.segmento = segmento
    }

 DNA_RNA(filamento) {
    const DNAarray = filamento.split("")
    for (let letra of DNAarray) {
        if (letra == "G") {
            letra = "C"
            RNA.push(letra)
        } else if (letra == "C") {
            letra = "G"
            RNA.push(letra)
        } else if (letra == "T") {
            letra = "A"
            RNA.push(letra)
        } else if (letra == "A") {
            letra = "U"
            RNA.push(letra)
        }

    }
    const RNAstring=RNA.join("")
    console.table(RNAstring)
}}
const dna = new Convertor("ATGCCGAAATTTGCG")

dna.DNA_RNA(dna.segmento)


