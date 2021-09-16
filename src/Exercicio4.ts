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
      throw new Error("Valor Inválido !!");
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
      throw new Error("Valor Inválido !!");
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
  GastoPessoaFisica.setNome = "Lucas";
  GastoPessoaFisica.setRendaAnual = 3000;
  GastoPessoaFisica.setGastoComSaude = 1;

  console.log(GastoPessoaFisica.getNome);
  console.log(GastoPessoaFisica.getRendaAnual);
  console.log(GastoPessoaFisica.getGastoComSaude);

  console.log(
    GastoPessoaFisica.TaxaPessoaFisica(
      GastoPessoaFisica.getRendaAnual,
      GastoPessoaFisica.getGastoComSaude
    )
  );
} catch (error) {
  console.log(error.message);
}

// Instanciando Classe GastoPessoaJuridica
const GastoPessoaJuridica = new PessoaJuridica("Gabriel", 2500, 5);
try {
  GastoPessoaJuridica.setNome = "Luis";
  GastoPessoaJuridica.setRendaAnual = 100;
  GastoPessoaJuridica.setNumeroDeFuncionarios = 9;

  console.log(GastoPessoaJuridica.getNome);
  console.log(GastoPessoaJuridica.getRendaAnual);
  console.log(GastoPessoaJuridica.getNumeroDeFuncionarios);

  console.log(
    GastoPessoaJuridica.TaxaPessoaJuridica(
      GastoPessoaJuridica.getRendaAnual,
      GastoPessoaJuridica.getNumeroDeFuncionarios
    )
  );
} catch (error) {
  console.log(error.message);
}
