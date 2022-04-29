//Transcrição do RNA a partir de um filamento de DNA

//DNA --> G, C, T, A
//RNA --> C, G, A, U

//Obs.: É preciso ter uma classe

//Criando a classe

class transcDNA {
    constructor (DNA) {
        this.DNA = DNA;
        this.RNA = "";        
    }
}

//Errei porque não chamei os dados, então agora vou mandar o return


transcricaoDNA () 
{
    if (DNA == "C") {
        return ("G")
    }
    else if (DNA == "G") {
        return ("C")
    }
    else if (DNA == "T") {
        return ("A")
    }
    else (DNA == "A") {
        return ("U")
    }
}
//Apareceu um erro na linha 22, sendo ele: Expected ";" but found "{"
//Como deu o erro e eu não consegui identificar onde foi, vou continuar o código pra ver se tá ok
//Tive ajuda nessa parte pq estava na dúvida de como fazia

const FitaDNA = ['A','T','G','C','C','G','A','A','A','T','T','T','G','C','G'];
//Vi algumas meninas usando o for, mas fiquei um pouco na dúvida do porque precisa
//Na verdade estou estudando cada comando, por isso ainda estou um pouco perdida.
//Vou colocar como pensei que fosse sem ser uma cola, nesse caso só um console.
console.log(FitaDNA)


//De início fiz assim, mas apareceu o erro "ReferenceError: C is not defined"
//então vi que não retornei o que estava no construtor, mas vou deixar pra lembrar esse erro.
//    const DNA = (["C", "G", "T", "A"])
//    if (this.C == C) {
//        console.log("G")