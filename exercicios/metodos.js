let nomes = "Amanda, Priscila, Vanessa";
let alunas = nomes.split(",");
alunas.push("Maria");
alunas.pop();
alunas.unshift("Adriana")
alunas.unshift("Bianca")
console.log(alunas)
console.log("------------")
let alunasExcluidas = alunas.splice(3, 2, "Eliza")
console.log(alunasExcluidas)
console.log("------------")
console.log(alunas)
console.log("------------")
console.log(alunas.includes("Beatriz"))
alunas.reverse();
console.log(alunas)



var copia = alunas.slice(1,3);



let letras = "abbbcccddd"


alunas = alunas.join(",");




console.log("------------")
let alunas1 = ["Amanda", "Priscila", "Vanessa", "Adriana"];
let alunas2 = ["Maria", "Bianca", "Beatriz", "Eliza"];
alunas1 = alunas1.concat(alunas2); 
console.log(alunas1)


let alunasNovas = ["Amanda", "Priscila", "Vanessa"];
// Percorre o Array
alunasNovas.forEach( (aluna) => { 
    console.log(aluna);
})

// Faz uma busca 
let busca = "Priscila";
let alunaEncontrada = alunasNovas.find( (aluna) => { 
    return aluna == busca;
})

console.log("------------")
console.log(alunaEncontrada)

// Retorna todas as alunas que contem a vogal "a"
let alunasFiltradas = alunasNovas.filter( (aluna) => { 
    return aluna.includes("i");
})

console.log(alunasFiltradas)


// Deixa todos os nomes em Caixa Alta
let alunasMapeadas = alunasNovas.map( (aluna) => { 
    return aluna.toUpperCase();
})

console.log(alunasMapeadas)


let numeros = [1, 2, 3, 4, 5]
let dobroNumeros = numeros.map((numero) => {
    if(numero % 2 == 0) {
        return numero * 2
    } else {
        return numero * 3
    }
})

console.log(dobroNumeros)

// Verifica se todas as alunas são iguais
let alunasAmanda = ["Amanda", "Amanda"]
let todasIguais = alunasNovas.every( (aluna) => { 
    return aluna == "Amanda";
})

console.log(todasIguais)