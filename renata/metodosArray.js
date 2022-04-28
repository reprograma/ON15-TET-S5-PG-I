let alunas = "Amanda, Priscila, Vanessa";
let alunas1 = ["Amanda", "Priscila", "Vanessa"];

let nomes = alunas.split(","); //transforma uma string em array
let nomes1 = alunas.split('');
let nomes2 = alunas1.join(''); //transforma uma Array em String
alunas1.push("Maria"); //adiciona um elemento no final do array
alunas1.pop(); //remove o ultimo elemento do array
alunas1.unshift("Bianca"); //adiciona um elemento no inicio do array
alunas1.shift();//remove o primeiro elemento do array


// console.log(nomes)
// console.log(nomes1)
// console.log(nomes2)
// console.log(alunas1)
// console.log('-----------------')
// console.log(alunas1)


var copia = alunas1.slice();

// console.log(copia)

var copia = alunas1.slice(1,3);
// console.log(copia)


let lista = ["Amanda", "Priscila", "Vanessa", "Marina", "Luiza", "Marta"];
lista.splice(1,0,"Maria");
// console.log(lista);
lista.splice(3,1, "Bianca");
// console.log(lista);
lista.splice(1,2,"Joana");
// console.log(lista)
// console.log(lista.indexOf("Maria")) //retorna o indice do elemento
// console.log(lista.includes("Beatriz")); // localiza se existe o elemento no array
// console.log(lista.sort()); //ordena o array por ordem alfabetica
// console.log(lista.reverse()); //inverte a ordem do array

let frutas = ["Banana", "Maçã", "Uva", "Melancia"];
let doces = ["Bolo", "Torta", "Pudim", "Sorvete"];

delicias = frutas.concat(doces);
// console.log(delicias);
delicias1 = [...frutas, ...doces];	
// console.log(delicias1);


let alunasNovas = ["Amanda", "Priscila", "Vanessa"];
// pecorre um array, sem modificar o array original
alunasNovas.forEach( (aluna) => { 
    console.log(aluna);
})
// Faz uma busca/encontra o primeiro elemento do array especificado e o retorna
// let busca = "Priscila";
let busca = "Juliana";
let alunaEncontrada = alunasNovas.find( (aluna) => { 
    return aluna == busca;
})
console.log("-------------------")
console.log(alunaEncontrada);

// // Retorna todas as alunas que contem a vogal "a"/filtra todos os elementos e os retorna com base nos parametros especificados
let alunasFiltradas = alunasNovas.filter( (aluna) => { 
    return aluna.includes("P");
})

console.log("-------------------")  
console.log(alunasFiltradas);

// // Deixa todos os nomes em Caixa Alta/mapea um array com base no retorno especificado
let alunasMapeadas = alunasNovas.map( (aluna) => { 
    return aluna.toUpperCase();
})

console.log("-------------------")
console.log(alunasMapeadas);

// // Verifica se todas as alunas são iguais/returna Bolean true, caso todos os elementos sejam iguais
let todasIguais = alunasNovas.every( (aluna) => { 
    return aluna == "Amanda";
})
console.log("-------------------")
console.log(todasIguais);