class DnaTranscriber {
    constructor(rna){       
        this.conversaoRNA = rna.split("");
        this.catalagoRNA = [];
    }
   
    toRna(){
        for (let conversao of this.conversaoRNA){
            if(conversao  == "C") {                
                this.catalagoRNA.push("G");
            } else if(conversao  == "G") {                
                this.catalagoRNA.push("C");
            } else if (conversao  == "A"){               
                this.catalagoRNA.push("T");
            }else if (conversao  == "U"){                
                this.catalagoRNA.push("A");
            }else {  
                console.log(`Erro: Letra inserida está incorreta`);
            }
        }
        let convertendoParaDNA = this.catalagoRNA.join("");
        console.log(convertendoParaDNA);
    }
  
}
const dnaTranscriber = new DnaTranscriber("UGCACCAGAAUU");  //=> UGCACCAGAAUU
dnaTranscriber.toRna(dnaTranscriber.rna);
