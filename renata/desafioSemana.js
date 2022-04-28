/* 
## Exercício lindo para vocês ❤️

Segundo o Só Biologia a “Síntese de RNA (mensageiro, por exemplo) se inicia com a separação das duas fitas de DNA. Apenas uma das fitas do DNA serve de molde para a produção da molécula de RNAm. A outra fita não é transcrita. Essa é uma das diferenças entre a duplicação do DNA e a produção do RNA.”.

Essa síntese estava sendo analisada em um centro de genética, através de equipamento que geraram a cadeia de DNA e RNA de modo textual.

Pensando em automatizar funturos mapeamentos de mutação, foi solicitado a criação de um programa que pudesse gerar de modo mais rápido a sequência de RNA a partir de um DNA.

Imaginando um segmento hipotético de um filamento de DNA com a seqüência de bases:

```
DNA - ATGCCGAAATTTGCG
```

O segmento de RNA formado na transcrição terá a seqüência de bases:

```
RNA - UACGGCUUUAAACGC
```

Ou seja, o processo consiste basicamente na conversão:

| DNA | RNA |
| --- | --- |
| G   | C   |
| C   | G   |
| T   | A   |
| A   | U   |


Então, tente criar um script que gere essa conversão.

Por exemplo:

```
const dnaTranscriber = new DnaTranscriber()
dnaTranscriber.toRna('C')) //=> G
dnaTranscriber.toRna('G')) //=> C
dnaTranscriber.toRna('A')) //=> U
dnaTranscriber.toRna('T')) //=> A
dnaTranscriber.toRna('ACGTGGTCTTAA')) //=> UGCACCAGAAUU

```




*/




class DnaTranscriber {
    constructor(dna) {
        this.dna = dna.toUpperCase();
    }


    // Professora tentei fazer de duas formas, mas não sei se está correta dessa forma.
    alterarRNA() {
        // console.log(this.dna);
        let rna = this.dna.replace(/G/g, "c").replace(/C/g, "g").replace(/T/g, "a").replace(/A/g, "u");

        return (`O seu DNA é ${this.dna} e o seu RNA é ${rna.toUpperCase()}.`);
    }


    alterarParaRNA() {

        this.rna = [];

        // console.log(this.rna);

        for (let i = 0; i < this.dna.length; i++) {
            if (this.dna[i] == "G") {
                this.rna[i] = "C"
            } else if (this.dna[i] == "C") {
                this.rna[i] = "G"
            } else if (this.dna[i] == "T") {
                this.rna[i] = "A"
            } else if (this.dna[i] == "A") {
                this.rna[i] = "U"
            }

            // console.log(this.rna);
        }
        return (`O Seu DNA é ${this.dna} e seu RNA é ${this.rna.join("")}.`);
    }
}



const dnaTranscriber1 = new DnaTranscriber('ATGCCGAAATTTGCG');
console.log(dnaTranscriber1.alterarRNA());
console.log(dnaTranscriber1.alterarParaRNA());

console.log("---------------------------------");
const dnaTranscriber2 = new DnaTranscriber('acuggaacuaacc');
console.log(dnaTranscriber2.alterarRNA());
console.log(dnaTranscriber2.alterarParaRNA());
