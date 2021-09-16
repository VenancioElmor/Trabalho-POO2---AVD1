class Fatura {
  constructor(
    private _numeros: number,
    private _descricao: string,
    private _QuantidadeComprada: number,
    private _preco: number
  ) {}

  // GETs
  get getQuantidadeComprada() {
    return this._QuantidadeComprada;
  }

  get getPreco() {
    return this._preco;
  }

  // Método ValorDaFatura
  public ValorDaFatura(QuantidadeComprada: number, preco: number): number {
    return QuantidadeComprada * preco;
  }
}

// Instanciando
const novaFatura = new Fatura(129328, "Celular", 2, 1500);
console.log(`O preço do produto é de: R$${novaFatura.getPreco}`);
console.log(`Quantidade comprada: ${novaFatura.getQuantidadeComprada}`);
console.log(
  `O valor da nova fatura será de: R$${novaFatura.ValorDaFatura(
    novaFatura.getPreco,
    novaFatura.getQuantidadeComprada
  )}`
);
