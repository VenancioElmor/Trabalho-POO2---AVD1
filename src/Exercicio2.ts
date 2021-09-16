class Veiculos {
  constructor(
    private _modelo: string,
    private _marca: string,
    private _ano: number,
    private _ValorLocacao: number,
    private _QuantidadeDeDias: number
  ) {}

  // Gets
  get getModelo() {
    return this._modelo;
  }

  get getMarca() {
    return this._marca;
  }

  get getAno() {
    return this._ano;
  }

  get getValorLocacao() {
    return this._ValorLocacao;
  }

  get getQuantidadeDeDias() {
    return this._QuantidadeDeDias;
  }

  // Sets
  // Set Modelo
  set setModelo(modelo: string) {
    if (modelo === "") {
      throw new Error("Modelo Inválido");
    }
    this._modelo = modelo;
  }

  // Set Marca
  set setMarca(marca: string) {
    if (marca === "") {
      throw new Error("Marca Inválida");
    }
    this._marca = marca;
  }

  // Set Ano
  set setAno(ano: number) {
    if (ano === 0) {
      throw new Error("Ano Inválido");
    }
    this._ano = ano;
  }

  // Set ValorLocacao
  set setValorLocacao(ValorLocacao: number) {
    if (ValorLocacao === 0) {
      throw new Error("Valor Inválido");
    }
    this._ValorLocacao = ValorLocacao;
  }

  // Set QuantidadeDeDias
  set setQuantidadeDeDias(QuantidadeDeDias: number) {
    if (QuantidadeDeDias === 0) {
      throw new Error("Informações sobre o dia Inválidas.");
    }
    this._QuantidadeDeDias = QuantidadeDeDias;
  }

  // Método passeio
  public passeio(dias: number, valorDia: number): number {
    return dias * valorDia;
  }
}

// Instanciando Classe Veiculos.
const NovoCarro = new Veiculos("UNO", "Fiat", 2020, 200, 1);

try {
  NovoCarro.setModelo = "Gol";
  NovoCarro.setMarca = "Volkswagen";
  NovoCarro.setAno = 2021;
  NovoCarro.setValorLocacao = 150;
  NovoCarro.setQuantidadeDeDias = 2;

  console.log(`O modelo do carro é: ${NovoCarro.getModelo}`);
  console.log(`A marca do carro é: ${NovoCarro.getMarca}`);
  console.log(`O ano do carro é: ${NovoCarro.getAno}`);
  console.log(`O valor da locação do carro é de: ${NovoCarro.getValorLocacao}`);
  console.log(
    `Quantidade de dias da locação: ${NovoCarro.getQuantidadeDeDias}`
  );

  // Imprimindo o valor do passeio.
  const dias = NovoCarro.getQuantidadeDeDias;
  const valorDia = NovoCarro.getValorLocacao;
  console.log(
    `O valor do passeio é de: R$${NovoCarro.passeio(dias, valorDia)} `
  );
} catch (error) {
  console.log(error.message);
}
