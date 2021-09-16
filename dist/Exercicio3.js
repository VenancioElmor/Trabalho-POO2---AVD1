"use strict";
var Fatura = /** @class */ (function () {
    function Fatura(_numeros, _descricao, _QuantidadeComprada, _preco) {
        this._numeros = _numeros;
        this._descricao = _descricao;
        this._QuantidadeComprada = _QuantidadeComprada;
        this._preco = _preco;
    }
    Object.defineProperty(Fatura.prototype, "getQuantidadeComprada", {
        // GETs
        get: function () {
            return this._QuantidadeComprada;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fatura.prototype, "getPreco", {
        get: function () {
            return this._preco;
        },
        enumerable: false,
        configurable: true
    });
    // Método ValorDaFatura
    Fatura.prototype.ValorDaFatura = function (QuantidadeComprada, preco) {
        return QuantidadeComprada * preco;
    };
    return Fatura;
}());
// Instanciando
var novaFatura = new Fatura(129328, "Celular", 2, 1500);
console.log("O pre\u00E7o do produto \u00E9 de: R$" + novaFatura.getPreco);
console.log("Quantidade comprada: " + novaFatura.getQuantidadeComprada);
console.log("O valor da nova fatura ser\u00E1 de: R$" + novaFatura.ValorDaFatura(novaFatura.getPreco, novaFatura.getQuantidadeComprada));
