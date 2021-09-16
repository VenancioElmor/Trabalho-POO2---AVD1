"use strict";
var Pessoas = /** @class */ (function () {
    function Pessoas(_nome, _sexo, _idade) {
        this._nome = _nome;
        this._sexo = _sexo;
        this._idade = _idade;
    }
    Object.defineProperty(Pessoas.prototype, "getNome", {
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "getSexo", {
        get: function () {
            return this._sexo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "getIdade", {
        get: function () {
            return this._idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "setNome", {
        set: function (nome) {
            // Condicional
            if (nome === "") {
                throw new Error("Nome Inválido");
            }
            this._nome = nome; // Parâmetro recebido
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "setSexo", {
        set: function (sexo) {
            // Condicional
            if (sexo !== "masculino" && sexo !== "feminino")
                // Se for diferente de Masculino e Feminino.
                throw new Error("Informação Inválida");
            this._sexo = sexo; // Parâmetro recebido
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoas.prototype, "setIdade", {
        set: function (idade) {
            // Condicional
            if (idade === 0)
                throw new Error("Idade Inválida.");
            this._idade = idade; // Parâmetro recebido
        },
        enumerable: false,
        configurable: true
    });
    // Método Para Verificar se a Pessoa é Maior de Idade ou Menor de idade.
    Pessoas.prototype.VerificarIdade = function () {
        // Void = Quando o Método não recebe nenhum retorno.
        if (this._idade >= 18)
            console.log("Pessoa Maior de Idade !!!");
        else
            console.log("Pessoa Menor de Idade !!!");
    };
    return Pessoas;
}());
// Instanciando uma nova classe (Venancio)
var NovaPessoa = new Pessoas("Venâncio", "Masculino", 25);
// Verificando o Nome
try {
    NovaPessoa.setNome = "Marcos"; // Recebendo nome
    console.log("O nome \u00E9: " + NovaPessoa.getNome);
}
catch (error) {
    console.log(error.message);
}
// Verificando o Sexo
try {
    NovaPessoa.setSexo = "masculino";
    console.log("O g\u00EAnero \u00E9: " + NovaPessoa.getSexo);
}
catch (error) {
    console.log(error.message);
}
// Verificando idade
try {
    NovaPessoa.setIdade = 19;
    console.log("A idade \u00E9 de: " + NovaPessoa.getIdade + " anos");
    // Método para verificar se é maior de idade ou menor de idade.
    NovaPessoa.VerificarIdade();
}
catch (error) {
    console.log(error.message);
}
