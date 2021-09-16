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
                throw new Error("Dias Inválidos");
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
// Instanciando Classe
var NovoCarro = new Veiculos("UNO", "Fiat", 2020, 200, 1);
try {
    NovoCarro.setModelo = "Gol";
    NovoCarro.setMarca = "Volkswagen";
    NovoCarro.setAno = 2021;
    NovoCarro.setValorLocacao = 150;
    NovoCarro.setQuantidadeDeDias = 2;
    console.log(NovoCarro.getModelo);
    console.log(NovoCarro.getMarca);
    console.log(NovoCarro.getAno);
    console.log(NovoCarro.getValorLocacao);
    console.log(NovoCarro.getQuantidadeDeDias);
    // Passeio
    var dias = NovoCarro.getQuantidadeDeDias;
    var valorDia = NovoCarro.getValorLocacao;
    console.log(NovoCarro.passeio(dias, valorDia));
}
catch (error) {
    console.log(error.message);
}
