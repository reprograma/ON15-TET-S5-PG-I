class Dna {
    converterRNA(bases) {
//criando uma variável nova para armazenar a nova string de transcrição
        let rna = '';
        for(let i = 0; i < bases.length; i++){ 
            switch(bases[i]){ 
                case 'C':
                    rna += 'G'; //adicionando na variável criada a transcrição do DNA em RNA
                    break;
                case 'G':
                    rna += 'C';
                    break;
                case 'T':
                    rna += 'A';
                    break;
                case 'A':
                    rna += 'U';
                    break;
                default: //caso a base inserida não seja C, G, A ou T
                    console.log("Não é uma base válida");

            }
        }
        console.log(rna);
    }
}

const transcricaoDNA = new Dna()
transcricaoDNA.converterRNA('C') //=> G
transcricaoDNA.converterRNA('G') //=> C
transcricaoDNA.converterRNA('A') //=> U
transcricaoDNA.converterRNA('T') //=> A
transcricaoDNA.converterRNA('ACGTGGTCTTAA') //=> UGCACCAGAAUU
transcricaoDNA.converterRNA('B') //=> Não é uma base válida
