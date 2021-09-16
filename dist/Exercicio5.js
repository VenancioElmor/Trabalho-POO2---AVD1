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
var Vendedores = /** @class */ (function () {
    function Vendedores(_Nome, _Salario, _ValorDaVenda) {
        this._Nome = _Nome;
        this._Salario = _Salario;
        this._ValorDaVenda = _ValorDaVenda;
    }
    Object.defineProperty(Vendedores.prototype, "getNome", {
        // Gets
        get: function () {
            return this._Nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "getSalario", {
        get: function () {
            return this._Salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "getValorDaVenda", {
        get: function () {
            return this._ValorDaVenda;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "setNome", {
        // Sets
        set: function (Nome) {
            if (Nome === "") {
                throw new Error("Nome Inválido !!");
            }
            this._Nome = Nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "setSalario", {
        set: function (Salario) {
            if (Salario <= 0) {
                throw new Error("Valor Inválido!");
            }
            this._Salario = Salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "setValorDaVenda", {
        set: function (ValorDaVenda) {
            if (ValorDaVenda <= 0) {
                throw new Error("Valor Inválido");
            }
            this._ValorDaVenda = ValorDaVenda;
        },
        enumerable: false,
        configurable: true
    });
    // Método Desconto
    Vendedores.prototype.Desconto = function (Salario) {
        return 0.08 * Salario;
    };
    return Vendedores;
}());
// Class Filha VendedorDePessoaFisica
var VendedorDePessoaFisica = /** @class */ (function (_super) {
    __extends(VendedorDePessoaFisica, _super);
    function VendedorDePessoaFisica(Nome, Salario, ValorDaVenda, Regiao) {
        var _this = _super.call(this, Nome, Salario, ValorDaVenda) || this;
        _this._Regiao = Regiao;
        return _this;
    }
    Object.defineProperty(VendedorDePessoaFisica.prototype, "getRegiao", {
        // Get
        get: function () {
            return this._Regiao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VendedorDePessoaFisica.prototype, "setRegiao", {
        // Set
        set: function (Regiao) {
            if (Regiao !== "Sul" &&
                Regiao !== "Sudeste" &&
                Regiao !== "Centro-Oeste" &&
                Regiao !== "Norte" &&
                Regiao !== "Nordeste") {
                throw new Error("Região Inválida");
            }
            this._Regiao = Regiao;
        },
        enumerable: false,
        configurable: true
    });
    // Método PessoaFisica Para Calcular a Comissão
    VendedorDePessoaFisica.prototype.MetodoComissao = function (ValorDaVenda, Regiao) {
        var Comissao = 0;
        if (Regiao === "Sul") {
            Comissao = ValorDaVenda * 0.1;
        }
        if (Regiao === "Sudeste") {
            Comissao = ValorDaVenda * 0.12;
        }
        if (Regiao === "Centro-Oeste") {
            Comissao = ValorDaVenda * 0.14;
        }
        if (Regiao === "Norte") {
            Comissao = ValorDaVenda * 0.15;
        }
        if (Regiao === "Nordeste") {
            Comissao = ValorDaVenda * 0.17;
        }
        return Comissao;
    };
    // Método PessoaFísica Para Calcular o Salario Total
    VendedorDePessoaFisica.prototype.SalarioTotal = function (Salario, Comissao) {
        var SalarioTotal = 0;
        SalarioTotal = Salario + Comissao;
        return SalarioTotal;
    };
    return VendedorDePessoaFisica;
}(Vendedores));
// Instanciando a Classe Vendedores
var NovoVendedor = new Vendedores("Leandro", 5000, 600);
try {
    NovoVendedor.setNome = "André";
    NovoVendedor.setSalario = 5000;
    NovoVendedor.setValorDaVenda = 600;
    console.log("Nome do vendedor \u00E9: " + NovoVendedor.getNome + " ");
    console.log("O sal\u00E1rio do vendedor: " + NovoVendedor.getNome + ", \u00E9 igual a: " + NovoVendedor.getSalario);
    console.log(NovoVendedor.getValorDaVenda);
    console.log("Desconto do sal\u00E1rio \u00E9 igual a: " + NovoVendedor.Desconto(NovoVendedor.getSalario));
}
catch (error) {
    console.log(error.message);
}
// Instanciando a Classe VendedorPessoaFisica
var PessoaFisicaNova = new VendedorDePessoaFisica("Pedrin", 3000, 500, "Sudeste");
try {
    PessoaFisicaNova.setNome = "Lucas";
    PessoaFisicaNova.setSalario = 9000;
    PessoaFisicaNova.setValorDaVenda = 600;
    PessoaFisicaNova.setRegiao = "Centro-Oeste";
    console.log(PessoaFisicaNova.getNome);
    console.log(PessoaFisicaNova.getSalario);
    console.log(PessoaFisicaNova.getValorDaVenda);
    console.log(PessoaFisicaNova.getRegiao);
    // Irá armazenar o valor da comissão na variável comissaoCalculada
    var comissaoCalculada = PessoaFisicaNova.MetodoComissao(PessoaFisicaNova.getValorDaVenda, PessoaFisicaNova.getRegiao);
    // Irá retornar a comissão da pessoa física.
    console.log("Comiss\u00E3o da pessoa f\u00EDsica \u00E9 igual: " + comissaoCalculada.toFixed(2));
    // Retorna o salário total ( salário + comissão )
    console.log("O sal\u00E1rio total \u00E9 de: " + PessoaFisicaNova.SalarioTotal(PessoaFisicaNova.getSalario, comissaoCalculada).toFixed(2));
}
catch (error) {
    console.log("Informação Inválida");
}
var PessoaJuridicaVendedor = /** @class */ (function (_super) {
    __extends(PessoaJuridicaVendedor, _super);
    function PessoaJuridicaVendedor(Nome, Salario, ValorDaVenda, NomeEmpresa, TotalFuncionarios) {
        var _this = _super.call(this, Nome, Salario, ValorDaVenda) || this;
        _this._NomeEmpresa = NomeEmpresa;
        _this._TotalFuncionarios = TotalFuncionarios;
        return _this;
    }
    Object.defineProperty(PessoaJuridicaVendedor.prototype, "NomeEmpresa", {
        // Gets
        get: function () {
            return this._NomeEmpresa;
        },
        // Set
        set: function (NomeEmpresa) {
            if (NomeEmpresa === "") {
                throw new Error("Nome de empresa inválido.");
            }
            this._NomeEmpresa = NomeEmpresa;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PessoaJuridicaVendedor.prototype, "TotalFuncionarios", {
        get: function () {
            return this._TotalFuncionarios;
        },
        set: function (TotalFuncionarios) {
            if (TotalFuncionarios <= 0) {
                throw new Error("Número de funcionários inválido.");
            }
            this._TotalFuncionarios = TotalFuncionarios;
        },
        enumerable: false,
        configurable: true
    });
    // Método ComissaoPessoaJuridica
    PessoaJuridicaVendedor.prototype.ComissaoPessoaJuridica = function (ValorDaVenda) {
        var comissaoJuridica = 0;
        if (ValorDaVenda < 5000) {
            comissaoJuridica = 0.02 * ValorDaVenda;
        }
        else if (ValorDaVenda >= 5000 && ValorDaVenda < 1000) {
            comissaoJuridica = 0.04 * ValorDaVenda;
        }
        else {
            comissaoJuridica = 0.06 * ValorDaVenda;
        }
        return comissaoJuridica;
    };
    // Método SalarioTotalPessoaJuridica
    PessoaJuridicaVendedor.prototype.SalarioTotalPJ = function (TotalFuncionarios, Comissao, Salario) {
        if (TotalFuncionarios < 100) {
            return Salario + Comissao + 200;
        }
        else {
            return Salario + Comissao + 300;
        }
    };
    return PessoaJuridicaVendedor;
}(Vendedores));
// Instanciando a classe PessoaJuridicaVendedor
var NovoVendedorJuridico = new PessoaJuridicaVendedor("Pablo", 2000, 150, "IBM", 5);
try {
    NovoVendedorJuridico.NomeEmpresa = "CSN";
    NovoVendedorJuridico.TotalFuncionarios = 99;
    console.log("Nome vendedor juridico: " + NovoVendedorJuridico.NomeEmpresa);
    console.log("Total de funcion\u00E1rios: " + NovoVendedorJuridico.TotalFuncionarios);
    var comissaoTotalJuridica = NovoVendedorJuridico.ComissaoPessoaJuridica(NovoVendedorJuridico.getValorDaVenda);
    console.log("Valor da comiss\u00E3o \u00E9 igual a: " + comissaoTotalJuridica.toFixed(2));
    console.log("Sal\u00E1rio Total Pessoa Jur\u00EDdica: " + NovoVendedorJuridico.SalarioTotalPJ(NovoVendedorJuridico.TotalFuncionarios, comissaoTotalJuridica, NovoVendedorJuridico.getSalario));
}
catch (error) {
    console.log(error.message);
}
