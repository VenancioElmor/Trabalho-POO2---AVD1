class Vendedores {
  constructor(
    private _Nome: string,
    private _Salario: number,
    private _ValorDaVenda: number
  ) {}

  // Gets
  get getNome() {
    return this._Nome;
  }

  get getSalario() {
    return this._Salario;
  }

  get getValorDaVenda() {
    return this._ValorDaVenda;
  }

  // Sets
  set setNome(Nome: string) {
    if (Nome === "") {
      throw new Error("Nome Inválido !!");
    }
    this._Nome = Nome;
  }

  set setSalario(Salario: number) {
    if (Salario <= 0) {
      throw new Error("Valor Inválido!");
    }
    this._Salario = Salario;
  }

  set setValorDaVenda(ValorDaVenda: number) {
    if (ValorDaVenda <= 0) {
      throw new Error("Valor Inválido");
    }
    this._ValorDaVenda = ValorDaVenda;
  }

  // Método Desconto
  public Desconto(Salario: number): number {
    return 0.08 * Salario;
  }
}

// Class Filha VendedorDePessoaFisica
class VendedorDePessoaFisica extends Vendedores {
  private _Regiao: string;
  constructor(
    Nome: string,
    Salario: number,
    ValorDaVenda: number,
    Regiao: string
  ) {
    super(Nome, Salario, ValorDaVenda);
    this._Regiao = Regiao;
  }

  // Get
  get getRegiao() {
    return this._Regiao;
  }

  // Set
  set setRegiao(Regiao: string) {
    if (
      Regiao !== "Sul" &&
      Regiao !== "Sudeste" &&
      Regiao !== "Centro-Oeste" &&
      Regiao !== "Norte" &&
      Regiao !== "Nordeste"
    ) {
      throw new Error("Região Inválida");
    }
    this._Regiao = Regiao;
  }
  // Método PessoaFisica Para Calcular a Comissão
  public MetodoComissao(ValorDaVenda: number, Regiao: string): number {
    let Comissao = 0;

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
  }

  // Método PessoaFísica Para Calcular o Salario Total
  public SalarioTotal(Salario: number, Comissao: number): number {
    let SalarioTotal = 0;
    SalarioTotal = Salario + Comissao;
    return SalarioTotal;
  }
}

// Instanciando a Classe Vendedores
const NovoVendedor = new Vendedores("Leandro", 5000, 600);
try {
  NovoVendedor.setNome = "André";
  NovoVendedor.setSalario = 5000;
  NovoVendedor.setValorDaVenda = 600;

  console.log(`Nome do vendedor é: ${NovoVendedor.getNome} `);
  console.log(
    `O salário do vendedor: ${NovoVendedor.getNome}, é igual a: ${NovoVendedor.getSalario}`
  );
  console.log(NovoVendedor.getValorDaVenda);

  console.log(
    `Desconto do salário é igual a: ${NovoVendedor.Desconto(
      NovoVendedor.getSalario
    )}`
  );
} catch (error) {
  console.log(error.message);
}

// Instanciando a Classe VendedorPessoaFisica
const PessoaFisicaNova = new VendedorDePessoaFisica(
  "Pedrin",
  3000,
  500,
  "Sudeste"
);

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
  const comissaoCalculada = PessoaFisicaNova.MetodoComissao(
    PessoaFisicaNova.getValorDaVenda,
    PessoaFisicaNova.getRegiao
  );
  // Irá retornar a comissão da pessoa física.
  console.log(
    `Comissão da pessoa física é igual: ${comissaoCalculada.toFixed(2)}`
  );
  // Retorna o salário total ( salário + comissão )
  console.log(
    `O salário total é de: ${PessoaFisicaNova.SalarioTotal(
      PessoaFisicaNova.getSalario,
      comissaoCalculada
    ).toFixed(2)}`
  );
} catch (error) {
  console.log("Informação Inválida");
}

class PessoaJuridicaVendedor extends Vendedores {
  private _NomeEmpresa: string;
  private _TotalFuncionarios: number;
  constructor(
    Nome: string,
    Salario: number,
    ValorDaVenda: number,
    NomeEmpresa: string,
    TotalFuncionarios: number
  ) {
    super(Nome, Salario, ValorDaVenda);
    this._NomeEmpresa = NomeEmpresa;
    this._TotalFuncionarios = TotalFuncionarios;
  }
  // Gets
  get NomeEmpresa() {
    return this._NomeEmpresa;
  }

  get TotalFuncionarios() {
    return this._TotalFuncionarios;
  }

  // Set
  set NomeEmpresa(NomeEmpresa: string) {
    if (NomeEmpresa === "") {
      throw new Error("Nome de empresa inválido.");
    }
    this._NomeEmpresa = NomeEmpresa;
  }

  set TotalFuncionarios(TotalFuncionarios: number) {
    if (TotalFuncionarios <= 0) {
      throw new Error("Número de funcionários inválido.");
    }
    this._TotalFuncionarios = TotalFuncionarios;
  }

  // Método ComissaoPessoaJuridica
  public ComissaoPessoaJuridica(ValorDaVenda: number): number {
    let comissaoJuridica = 0;

    if (ValorDaVenda < 5000) {
      comissaoJuridica = 0.02 * ValorDaVenda;
    } else if (ValorDaVenda >= 5000 && ValorDaVenda < 1000) {
      comissaoJuridica = 0.04 * ValorDaVenda;
    } else {
      comissaoJuridica = 0.06 * ValorDaVenda;
    }
    return comissaoJuridica;
  }

  // Método SalarioTotalPessoaJuridica
  public SalarioTotalPJ(
    TotalFuncionarios: number,
    Comissao: number,
    Salario: number
  ): number {
    if (TotalFuncionarios < 100) {
      return Salario + Comissao + 200;
    } else {
      return Salario + Comissao + 300;
    }
  }
}

// Instanciando a classe PessoaJuridicaVendedor
const NovoVendedorJuridico = new PessoaJuridicaVendedor(
  "Pablo",
  2000,
  150,
  "IBM",
  5
);
try {
  NovoVendedorJuridico.NomeEmpresa = "CSN";
  NovoVendedorJuridico.TotalFuncionarios = 99;

  console.log(`Nome vendedor juridico: ${NovoVendedorJuridico.NomeEmpresa}`);
  console.log(
    `Total de funcionários: ${NovoVendedorJuridico.TotalFuncionarios}`
  );

  const comissaoTotalJuridica = NovoVendedorJuridico.ComissaoPessoaJuridica(
    NovoVendedorJuridico.getValorDaVenda
  );
  console.log(
    `Valor da comissão é igual a: ${comissaoTotalJuridica.toFixed(2)}`
  );

  console.log(
    `Salário Total Pessoa Jurídica: ${NovoVendedorJuridico.SalarioTotalPJ(
      NovoVendedorJuridico.TotalFuncionarios,
      comissaoTotalJuridica,
      NovoVendedorJuridico.getSalario
    )}`
  );
} catch (error) {
  console.log(error.message);
}
