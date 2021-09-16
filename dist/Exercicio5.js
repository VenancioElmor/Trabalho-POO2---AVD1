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
                throw new Error("Salário Inválido!");
            }
            this._Salario = Salario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vendedores.prototype, "setValorDaVenda", {
        set: function (ValorDaVenda) {
            if (ValorDaVenda <= 0) {
                throw new Error("Valor da venda Inválido");
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
    NovoVendedor.setNome = "Pedro";
    NovoVendedor.setSalario = 5000;
    NovoVendedor.setValorDaVenda = 200;
    console.log("Nome do vendedor \u00E9: " + NovoVendedor.getNome + " ");
    console.log("Seu sal\u00E1rio \u00E9 de: R$" + NovoVendedor.getSalario);
    console.log("O valor da sua venda foi de: R$" + NovoVendedor.getValorDaVenda);
    console.log("Desconto do sal\u00E1rio \u00E9 igual a: " + NovoVendedor.Desconto(NovoVendedor.getSalario));
}
catch (error) {
    console.log(error.message);
}
console.log("--------------------------------------");
// Instanciando a Classe VendedorPessoaFisica
var PessoaFisicaNova = new VendedorDePessoaFisica("Pedrin", 3000, 500, "Sudeste");
try {
    PessoaFisicaNova.setNome = "Rafael";
    PessoaFisicaNova.setSalario = 9000;
    PessoaFisicaNova.setValorDaVenda = 300;
    PessoaFisicaNova.setRegiao = "Nordeste";
    console.log("Nome da pessoa f\u00EDsica: " + PessoaFisicaNova.getNome);
    console.log("Sal\u00E1rio da pessoa f\u00EDsica: " + PessoaFisicaNova.getSalario);
    console.log("Valor da venda: " + PessoaFisicaNova.getValorDaVenda);
    console.log("Regi\u00E3o: " + PessoaFisicaNova.getRegiao);
    // Irá armazenar o valor da comissão na variável comissaoCalculada
    var comissaoCalculada = PessoaFisicaNova.MetodoComissao(PessoaFisicaNova.getValorDaVenda, PessoaFisicaNova.getRegiao);
    console.log("Comiss\u00E3o da pessoa f\u00EDsica \u00E9 igual: " + comissaoCalculada.toFixed(2));
    // Retorna o salário total ( salário + comissão )
    console.log("O sal\u00E1rio total \u00E9 de: " + PessoaFisicaNova.SalarioTotal(PessoaFisicaNova.getSalario, comissaoCalculada).toFixed(2));
}
catch (error) {
    console.log("Informação Inválida");
}
console.log("------------------------------------");
var PessoaJuridicaNovo = /** @class */ (function (_super) {
    __extends(PessoaJuridicaNovo, _super);
    function PessoaJuridicaNovo(Nome, Salario, ValorDaVenda, NomeEmpresa, TotalFuncionarios) {
        var _this = _super.call(this, Nome, Salario, ValorDaVenda) || this;
        _this._NomeEmpresa = NomeEmpresa;
        _this._TotalFuncionarios = TotalFuncionarios;
        return _this;
    }
    Object.defineProperty(PessoaJuridicaNovo.prototype, "NomeEmpresa", {
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
    Object.defineProperty(PessoaJuridicaNovo.prototype, "TotalFuncionarios", {
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
    PessoaJuridicaNovo.prototype.ComissaoPessoaJuridica = function (ValorDaVenda) {
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
    PessoaJuridicaNovo.prototype.SalarioTotalPJ = function (TotalFuncionarios, Comissao, Salario) {
        if (TotalFuncionarios < 100) {
            return Salario + Comissao + 200;
        }
        else {
            return Salario + Comissao + 300;
        }
    };
    return PessoaJuridicaNovo;
}(Vendedores));
// Instanciando a classe PessoaJuridicaNovo
var NovoVendedorJuridico = new PessoaJuridicaNovo("Pablo", 30000, 4500, "Rocketz Informática", 15);
try {
    NovoVendedorJuridico.NomeEmpresa = "Pichau Informática";
    NovoVendedorJuridico.TotalFuncionarios = 50;
    // NovoVendedorJuridico.setNome = "Mirela";
    console.log("Nome da empresa: " + NovoVendedorJuridico.NomeEmpresa);
    console.log("Total de funcion\u00E1rios: " + NovoVendedorJuridico.TotalFuncionarios);
    console.log("Nome do funcion\u00E1rio: " + NovoVendedorJuridico.getNome);
    console.log("Seu sal\u00E1rio \u00E9 de: R$" + NovoVendedorJuridico.getSalario);
    console.log("O valor da venda foi de: R$" + NovoVendedorJuridico.getValorDaVenda);
    // Variável comissaoTotalJuridica vai receber o valor da comissao da pessoa juridica.
    var comissaoTotalJuridica = NovoVendedorJuridico.ComissaoPessoaJuridica(NovoVendedorJuridico.getValorDaVenda);
    console.log("Valor da comiss\u00E3o \u00E9 igual a: " + comissaoTotalJuridica.toFixed(2));
    console.log("Sal\u00E1rio Total Pessoa Jur\u00EDdica: " + NovoVendedorJuridico.SalarioTotalPJ(NovoVendedorJuridico.TotalFuncionarios, comissaoTotalJuridica, NovoVendedorJuridico.getSalario));
}
catch (error) {
    console.log(error.message);
}
