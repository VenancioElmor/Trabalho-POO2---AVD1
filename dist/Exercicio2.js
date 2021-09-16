"use strict";
var Veiculos = /** @class */ (function () {
    function Veiculos(_modelo, _marca, _ano, _ValorLocacao, _QuantidadeDeDias) {
        this._modelo = _modelo;
        this._marca = _marca;
        this._ano = _ano;
        this._ValorLocacao = _ValorLocacao;
        this._QuantidadeDeDias = _QuantidadeDeDias;
    }
    Object.defineProperty(Veiculos.prototype, "getModelo", {
        // Gets
        get: function () {
            return this._modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "getMarca", {
        get: function () {
            return this._marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "getAno", {
        get: function () {
            return this._ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "getValorLocacao", {
        get: function () {
            return this._ValorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "getQuantidadeDeDias", {
        get: function () {
            return this._QuantidadeDeDias;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "setModelo", {
        // Sets
        // Set Modelo
        set: function (modelo) {
            if (modelo === "") {
                throw new Error("Modelo Inválido");
            }
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "setMarca", {
        // Set Marca
        set: function (marca) {
            if (marca === "") {
                throw new Error("Marca Inválida");
            }
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "setAno", {
        // Set Ano
        set: function (ano) {
            if (ano === 0) {
                throw new Error("Ano Inválido");
            }
            this._ano = ano;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "setValorLocacao", {
        // Set ValorLocacao
        set: function (ValorLocacao) {
            if (ValorLocacao === 0) {
                throw new Error("Valor Inválido");
            }
            this._ValorLocacao = ValorLocacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculos.prototype, "setQuantidadeDeDias", {
        // Set QuantidadeDeDias
        set: function (QuantidadeDeDias) {
            if (QuantidadeDeDias === 0) {
                throw new Error("Informações sobre o dia Inválidas.");
            }
            this._QuantidadeDeDias = QuantidadeDeDias;
        },
        enumerable: false,
        configurable: true
    });
    // Método passeio
    Veiculos.prototype.passeio = function (dias, valorDia) {
        return dias * valorDia;
    };
    return Veiculos;
}());
// Instanciando Classe Veiculos.
var NovoCarro = new Veiculos("UNO", "Fiat", 2020, 200, 1);
try {
    NovoCarro.setModelo = "Gol";
    NovoCarro.setMarca = "Volkswagen";
    NovoCarro.setAno = 2021;
    NovoCarro.setValorLocacao = 150;
    NovoCarro.setQuantidadeDeDias = 2;
    console.log("O modelo do carro \u00E9: " + NovoCarro.getModelo);
    console.log("A marca do carro \u00E9: " + NovoCarro.getMarca);
    console.log("O ano do carro \u00E9: " + NovoCarro.getAno);
    console.log("O valor da loca\u00E7\u00E3o do carro \u00E9 de: " + NovoCarro.getValorLocacao);
    console.log("Quantidade de dias da loca\u00E7\u00E3o: " + NovoCarro.getQuantidadeDeDias);
    // Imprimindo o valor do passeio.
    var dias = NovoCarro.getQuantidadeDeDias;
    var valorDia = NovoCarro.getValorLocacao;
    console.log("O valor do passeio \u00E9 de: R$" + NovoCarro.passeio(dias, valorDia) + " ");
}
catch (error) {
    console.log(error.message);
}
