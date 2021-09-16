"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe Pai
var CalculaIR = /** @class */ (function () {
    function CalculaIR(_nome, _RendaAnual) {
        this._nome = _nome;
        this._RendaAnual = _RendaAnual;
    }
    Object.defineProperty(CalculaIR.prototype, "getNome", {
        // Get
        get: function () {
            return this._nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalculaIR.prototype, "getRendaAnual", {
        get: function () {
            return this._RendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalculaIR.prototype, "setNome", {
        // Set
        set: function (nome) {
            if (nome === "") {
                throw new Error("Nome Inválido !!");
            }
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CalculaIR.prototype, "setRendaAnual", {
        set: function (RendaAnual) {
            if (RendaAnual === 0) {
                throw new Error("Valor Inválido !!");
            }
            this._RendaAnual = RendaAnual;
        },
        enumerable: false,
        configurable: true
    });
    return CalculaIR;
}());
// Classe Filha Pessoa Fisica.
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, RendaAnual, GastoComSaude) {
        var _this = _super.call(this, nome, RendaAnual) || this;
        _this._GastoComSaude = GastoComSaude;
        return _this;
    }
    Object.defineProperty(PessoaFisica.prototype, "setGastoComSaude", {
        set: function (GastoComSaude) {
            if (GastoComSaude < 0) {
                throw new Error("Valor de gasto com saúde Inválido !!");
            }
            this._GastoComSaude = GastoComSaude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PessoaFisica.prototype, "getGastoComSaude", {
        get: function () {
            return this._GastoComSaude;
        },
        enumerable: false,
        configurable: true
    });
    // Método
    PessoaFisica.prototype.TaxaPessoaFisica = function (RendaAnual, GastoComSaude) {
        if (RendaAnual < 20000)
            return 0.15 * RendaAnual;
        else if (RendaAnual >= 20000 && GastoComSaude > 0)
            return 0.25 * RendaAnual - 0.5 * GastoComSaude;
        else
            return 0.25 * RendaAnual;
    };
    return PessoaFisica;
}(CalculaIR));
// Classe Filha Pessoa Juridica
var PessoaJuridica = /** @class */ (function (_super) {
    __extends(PessoaJuridica, _super);
    function PessoaJuridica(nome, RendaAnual, NumeroDeFuncionarios) {
        var _this = _super.call(this, nome, RendaAnual) || this;
        _this._NumeroDeFuncionarios = NumeroDeFuncionarios;
        return _this;
    }
    Object.defineProperty(PessoaJuridica.prototype, "getNumeroDeFuncionarios", {
        // Gets
        get: function () {
            return this._NumeroDeFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PessoaJuridica.prototype, "setNumeroDeFuncionarios", {
        // Set
        set: function (NumeroDeFuncionarios) {
            if (NumeroDeFuncionarios === 0) {
                throw new Error("Número de Funcionários Inválidos !!");
            }
            this._NumeroDeFuncionarios = NumeroDeFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    // Método TaxaPessoaJuridica
    PessoaJuridica.prototype.TaxaPessoaJuridica = function (RendaAnual, NumeroDeFuncionarios) {
        if (NumeroDeFuncionarios > 10)
            return RendaAnual * 0.14;
        else
            return RendaAnual * 0.16;
    };
    return PessoaJuridica;
}(CalculaIR));
// Instanciando Classe GastoPessoaFisica
var GastoPessoaFisica = new PessoaFisica("Maria", 2000, 500);
try {
    GastoPessoaFisica.setNome = "Pedro";
    GastoPessoaFisica.setRendaAnual = 30000;
    GastoPessoaFisica.setGastoComSaude = 100;
    console.log("O nome da pessoa fisica \u00E9: " + GastoPessoaFisica.getNome);
    console.log("A sua renda anual \u00E9 de: R$" + GastoPessoaFisica.getRendaAnual);
    console.log("Seu gasto com sa\u00FAde \u00E9 de: R$" + GastoPessoaFisica.getGastoComSaude);
    console.log("O valor de imposto a ser pago \u00E9 de: R$" + GastoPessoaFisica.TaxaPessoaFisica(GastoPessoaFisica.getRendaAnual, GastoPessoaFisica.getGastoComSaude));
}
catch (error) {
    console.log(error.message);
}
console.log("-------------------------------");
// Instanciando Classe GastoPessoaJuridica
var GastoPessoaJuridica = new PessoaJuridica("Pichau", 500000, 50);
try {
    GastoPessoaJuridica.setNome = "KaBuM! - E-commerce de Tecnologia e Games";
    GastoPessoaJuridica.setRendaAnual = 700000;
    GastoPessoaJuridica.setNumeroDeFuncionarios = 8;
    console.log("Nome pessoa jur\u00EDdica: " + GastoPessoaJuridica.getNome);
    console.log("Sua renda anual \u00E9 de: R$" + GastoPessoaJuridica.getRendaAnual);
    console.log("N\u00FAmero de funcion\u00E1rios: " + GastoPessoaJuridica.getNumeroDeFuncionarios);
    console.log("A taxa da pessoa jur\u00EDdica \u00E9 de: R$" + GastoPessoaJuridica.TaxaPessoaJuridica(GastoPessoaJuridica.getRendaAnual, GastoPessoaJuridica.getNumeroDeFuncionarios).toFixed(2));
}
catch (error) {
    console.log(error.message);
}
