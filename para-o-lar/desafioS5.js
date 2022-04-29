let RNA = []
class Conversao {
    constructor(filamentoRNA) {
        this.filamentoRNA = filamentoRNA
    }

    conversao(DNA) {
        let transformacao = DNA.split("")

        for (let letra of transformacao) {
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

            } else {

            }

        }

        let transformarEmRNA = RNA.join("")
        console.log(transformarEmRNA)
    }

}

const resultadoFinal = new Conversao("ATGCCGAAATTTGCG")
resultadoFinal.conversao(resultadoFinal.filamentoRNA)
