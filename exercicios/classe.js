class Estudante {
    constructor(nome, matricula, endereco, curso) {
        this.nome = nome;
        this.matricula = matricula;
        this.endereco = endereco;
        this.curso = curso;
    }

    estudarProva(estudo) {
        if(estudo == "S") {
            console.log("Tudo vai dar certo, você irá passar!!");
        } else {
            console.log("Boa sorte então, o bicho vai pegar!!!");
        
        }
    }

};

const estudanteRafa = new Estudante("Rafa", 123456, "Algum lugar por ai, 111", "Quimica");
console.log(estudanteRafa);

estudanteRafa.estudarProva("S");
estudanteRafa.estudarProva("N");

