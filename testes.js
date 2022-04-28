

let primeiraLetra = "C"
let segundaLetra = "G"
let terceiraLetra = "U"
let quartaLetra = "A"

function transformar(letra) {
    if(letra == "G" || letra == "g"){
        console.log(primeiraLetra)
    }else if(letra == "C" || letra == "c"){
        console.log(segundaLetra)
    }else if(letra == "A" || letra == "a"){
        console.log(terceiraLetra)
    }else if(letra == "T" || letra == "t"){
        console.log(quartaLetra)
    }else {
        console.log("você terá que digitar a letra que integram o DNA para que seja transformado em RNA")
    }
}

transformar("A")
transformar("T")   
transformar("G")
transformar("C")
transformar("C")
transformar("G")
transformar("A")
transformar("A")
transformar("A")
transformar("T")
transformar("T")
transformar("T")
transformar("G")
transformar("C")
transformar("G")




// ......................................................................................



let letras = ["A", "T", "G", "C", "C", "G", "A", "A", "A", "T", "T", "T", "G", "C", "G"]

letras.forEach((letra) => {
    if(letra == "G" || letra == "g"){
        console.log("C")
    }else if(letra == "C" || letra == "c"){
        console.log("G")
    }else if(letra == "A" || letra == "a"){
        console.log("U")
    }else if(letra == "T" || letra == "t"){
        console.log("A")
    }else {
        console.log("você terá que digitar a letra que integram o DNA para que seja transformado em RNa")
    }
})



// ......................................................................................


let letras = ["A", "T", "G", "C", "C", "G", "A", "A", "A", "T", "T", "T", "G", "C", "G"]
let arr = []

letras.forEach((letra) => {
    if(letra == "G" || letra == "g"){
        arr.push("C")
    }else if(letra == "C" || letra == "c"){
        arr.push("G")
    }else if(letra == "A" || letra == "a"){
        arr.push("U")
    }else if(letra == "T" || letra == "t"){
       arr.push("A")
    }else {
        console.log(arr.push("você terá que digitar a letra que integra o DNA para que seja transformado em RNA"))
    }
})

arr = arr.join("")
console.log(arr)

// .......................................................................................


let letra1 = "ATGCCGAAATTTGCG"
letra2 = letra1.split("")
let arr = []

letra2.forEach((letra) => {
    if(letra == "G" || letra == "g"){
        arr.push("C")
    }else if(letra == "C" || letra == "c"){
        arr.push("G")
    }else if(letra == "A" || letra == "a"){
        arr.push("U")
    }else if(letra == "T" || letra == "t"){
       arr.push("A")
    }else {
        console.log(arr.push("você terá que digitar a letra que integra o DNA para que seja transformado em RNA"))
    }
})

arr = arr.join("")
console.log(arr)


// ............................................................................... deu certo 

function transformar(entrada){

    entrada = entrada.split("")

    let arr = []

    entrada.forEach((letra) => {
        if(letra == "G" || letra == "g"){
            arr.push("C")
        }else if(letra == "C" || letra == "c"){
            arr.push("G")
        }else if(letra == "A" || letra == "a"){
            arr.push("U")
        }else if(letra == "T" || letra == "t"){
           arr.push("A")
        }else {
            arr.push(` A letra ${letra} não compõe letras do DNA, dessa forma não pode ser transformado em RNA `)
        }
    })
    
    arr = arr.join("")
    console.log(arr)



}

transformar("ATGCCGAAATTTGCG")

// .............................................................................. deu certo 

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
                return arr.push(` A letra ${letra} não compõe letras do DNA, dessa forma não pode ser transformada em RNA `)
            }
        })
        
        arr = arr.join("")
        console.log(arr)
    
    
    
    }

}
const dnaTranscriber = new Alterar()
dnaTranscriber.transformar("TGCCGAAATTTGCG")


// ..................................................................
