/* Converter DNA em RNA:
DNA: G, C, T, A.
RNA: C, G, A, U. */

function alterar(DNA) {
    let entradaDNA = DNA.split("") // [G,C,T,A] <- GCTA
    let RNA = []
    for (let raiz of entradaDNA) { // G vira C -> InputDNA => [G, C, T,A] -> raiz -> G
        if (raiz == "G") {
            raiz = "C";
            RNA.push(raiz); // [C]
        } else if (raiz == "C") {
            raiz = "G";
            RNA.push(raiz); // [C,G]
        } else if (raiz == "T") {
            raiz = "A";
            RNA.push(raiz); // [C,G,A]
        } else {
            raiz = "U"
            RNA.push(raiz); // [C,G,A, U]
        }
    }
    let resultadoRNA = RNA.join(""); // CGAU
    return resultadoRNA; // CGAU
    
}
console.log(`A conversão para RNA será: ${alterar("ATGCCGAAATTTGCG")}`)
