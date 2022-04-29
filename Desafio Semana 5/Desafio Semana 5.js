// 1- Criar uma classe
// 2- Criar o método de conversão
//   - Receber um parêmtro 
//   - Utilizando o parametro recebido, criar a logica de conversão

// Fora da classe:
// 3- Instanciar (criar) um objeto da classe criada anteriormente
// 4- Utilizando o objeto, acessar o método de conversão criado dentro da classe, 
// passando o parametro que ele espera.

class DnaTranscriber {
  constructor() {}

  converterDna(filamentoDna) {
    let filamentoRna = "";
    filamentoDna = filamentoDna.split("");
    
    filamentoDna.forEach(item => {
      if(item == "G") {
        filamentoRna += "C";
      } else if(item == "C") {
        filamentoRna += "G";
      } else if(item == "T") {
        filamentoRna += "A";
      } else if(item == "A") {
        filamentoRna += "U";
      } else {
        filamentoRna = "erro";
      }
    });

    // Retorno final:
    console.log(filamentoRna)
  }
}

const transcriber = new DnaTranscriber();
transcriber.converterDna("ACGTGGTCTTAA")


