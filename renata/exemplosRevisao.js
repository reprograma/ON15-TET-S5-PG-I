/*if(condicao) {
    //bloco de código
}else {

}

if - se 

se curso for literatura, faça isso 
else - senao faça isso
*/

if(curso = "literatura"){
    console.log("O curso é literatura")
}else {
    console.log("O curso não é literatura")
}

/*for - para 

para essa condição, faça isso

= atribui valor

let numero = 7 (inteiro) 
if (numero == "7" (string)) - nessa verificação ele vai passar
numero === "7" - nessa verificação ele irá ver o tipo de dado e não ira passar.

*/

console.log("-----------------")

let total = 0;
let contador = 0;
while (contador < 10){
    total = total + (contador * 100)
    total += contador * 100
    console.log(`contando...${contador} com o valor de ${total}`)
    contador++;
}


console.log("-----------------")

let aldeias = ["Aldeia da Folha", "Aldeia da Areia", "Aldeia das Nuvens", "Aldeia do Som"]
for(let aldeia of aldeias){
    console.log(`Mostre para mim a aldeia: ${aldeia}`)
    console.log(`Mostre para mim a aldeia: ${aldeia[10]}`)
}


console.log("-----------------")

let numeros = [1,2,3,4,5,6,7,8,9,10]

for (let numero of numeros){
    if(numero % 2 == 0) {
        console.log(`O número ${numero} é par`)
    }
}

console.log("-----------------")

let numeros1 = [2 , 3 , 4, 6, 10,21,38]
let arr = []

for (let numero of numeros1){
    if(numero % 2 == 0){
        arr.push(numero)

    }
}
console.log(arr)
