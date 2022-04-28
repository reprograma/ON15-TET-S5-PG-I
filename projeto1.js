

class Alterar{
    constructor(dna){
        this.dna = dna;
        
    }
    transformar(dna){

        dna = dna.split("")
    
        let arr = []
    
        dna.forEach((letra) => {
            if(letra == "G" || letra == "g"){
                return arr.push("C")
            }else if(letra == "C" || letra == "c"){
                return arr.push("G")
            }else if(letra == "A" || letra == "a"){
                return arr.push("U")
            }else if(letra == "T" || letra == "t"){
               return arr.push("A")
            }else {
                return arr.push(` A letra ${letra} não compoem letras do DNA, dessa forma não pode ser transformada em RNA `)
            }
        })
        
        arr = arr.join("")
        console.log(arr)
    
    
    
    }

}
const dnaTranscriber = new Alterar()
dnaTranscriber.transformar("TGCCGAAATTTGCG")
   





  