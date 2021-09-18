// Classe Pai
class CalculaIR {
  constructor(private _nome: string, private _RendaAnual: number) {}

  // Get
  get getNome() {
    return this._nome;
  }

  get getRendaAnual() {
    return this._RendaAnual;
  }

  // Set
  set setNome(nome: string) {
    if (nome === "") {
      throw new Error("Nome Inválido !!");
    }
    this._nome = nome;
  }

  set setRendaAnual(RendaAnual: number) {
    if (RendaAnual === 0) {
      throw new Error("Valor Inválido !!");
    }
    this._RendaAnual = RendaAnual;
  }
}

// Classe Filha Pessoa Fisica.
class PessoaFisica extends CalculaIR {
  private _GastoComSaude: number;
  constructor(nome: string, RendaAnual: number, GastoComSaude: number) {
    super(nome, RendaAnual);
    this._GastoComSaude = GastoComSaude;
  }

  set setGastoComSaude(GastoComSaude: number) {
    if (GastoComSaude < 0) {
      throw new Error("Valor de gasto com saúde Inválido !!");
    }
    this._GastoComSaude = GastoComSaude;
  }

  get getGastoComSaude() {
    return this._GastoComSaude;
  }

  // Método
  public TaxaPessoaFisica(RendaAnual: number, GastoComSaude: number): number {
    if (RendaAnual < 20000) return 0.15 * RendaAnual;
    else if (RendaAnual >= 20000 && GastoComSaude > 0)
      return 0.25 * RendaAnual - 0.5 * GastoComSaude;
    else return 0.25 * RendaAnual;
  }
}
// Classe Filha Pessoa Juridica
class PessoaJuridica extends CalculaIR {
  private _NumeroDeFuncionarios: number;
  constructor(nome: string, RendaAnual: number, NumeroDeFuncionarios: number) {
    super(nome, RendaAnual);
    this._NumeroDeFuncionarios = NumeroDeFuncionarios;
  }
  // Gets
  get getNumeroDeFuncionarios() {
    return this._NumeroDeFuncionarios;
  }

  // Set
  set setNumeroDeFuncionarios(NumeroDeFuncionarios: number) {
    if (NumeroDeFuncionarios === 0) {
      throw new Error("Número de Funcionários Inválidos !!");
    }
    this._NumeroDeFuncionarios = NumeroDeFuncionarios;
  }

  // Método TaxaPessoaJuridica
  public TaxaPessoaJuridica(
    RendaAnual: number,
    NumeroDeFuncionarios: number
  ): number {
    if (NumeroDeFuncionarios > 10) return RendaAnual * 0.14;
    else return RendaAnual * 0.16;
  }
}

// Instanciando Classe GastoPessoaFisica
const GastoPessoaFisica = new PessoaFisica("Maria", 2000, 500);
try {
  GastoPessoaFisica.setNome = "Pedro";
  GastoPessoaFisica.setRendaAnual = 50000;
  GastoPessoaFisica.setGastoComSaude = 2000;

  console.log(`O nome da pessoa fisica é: ${GastoPessoaFisica.getNome}`);
  console.log(`A sua renda anual é de: R$${GastoPessoaFisica.getRendaAnual}`);
  console.log(
    `Seu gasto com saúde é de: R$${GastoPessoaFisica.getGastoComSaude}`
  );

  console.log(
    `O valor de imposto a ser pago é de: R$${GastoPessoaFisica.TaxaPessoaFisica(
      GastoPessoaFisica.getRendaAnual,
      GastoPessoaFisica.getGastoComSaude
    )}`
  );
} catch (error) {
  console.log(error.message);
}
console.log("-------------------------------");

// Instanciando Classe GastoPessoaJuridica
const GastoPessoaJuridica = new PessoaJuridica("Pichau", 500000, 50);
try {
  GastoPessoaJuridica.setNome = "KaBuM! - E-commerce de Tecnologia e Games";
  GastoPessoaJuridica.setRendaAnual = 400000;
  GastoPessoaJuridica.setNumeroDeFuncionarios = 25;

  console.log(`Nome pessoa jurídica: ${GastoPessoaJuridica.getNome}`);
  console.log(`Sua renda anual é de: R$${GastoPessoaJuridica.getRendaAnual}`);
  console.log(
    `Número de funcionários: ${GastoPessoaJuridica.getNumeroDeFuncionarios}`
  );

  console.log(
    `A taxa da pessoa jurídica é de: R$${GastoPessoaJuridica.TaxaPessoaJuridica(
      GastoPessoaJuridica.getRendaAnual,
      GastoPessoaJuridica.getNumeroDeFuncionarios
    ).toFixed(2)}`
  );
} catch (error) {
  console.log(error.message);
}
